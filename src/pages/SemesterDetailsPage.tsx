
import { useParams, Navigate } from "react-router-dom";
import { getSemesterById } from "@/data/assignments";
import SubjectCard from "@/components/SubjectCard";
import Breadcrumbs from "@/components/Breadcrumbs";

const SemesterDetailsPage = () => {
  const { semesterId } = useParams<{ semesterId: string }>();
  
  if (!semesterId) {
    return <Navigate to="/semesters" />;
  }

  const semester = getSemesterById(semesterId);
  
  if (!semester) {
    return <Navigate to="/semesters" />;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" },
    { label: semester.name, path: `/semesters/${semesterId}` }
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="page-title">{semester.name}</h1>
      <p className="text-paper-200 mb-8">
        Select a subject to view available assignments
      </p>

      <div className="space-y-4">
        {semester.subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            semesterId={semesterId}
            id={subject.id}
            name={subject.name}
            assignmentCount={subject.assignments.length}
          />
        ))}
      </div>
    </div>
  );
};

export default SemesterDetailsPage;
