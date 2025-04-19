
import { useParams, Navigate } from "react-router-dom";
import { getSemesterById, getSubjectById } from "@/data/assignments";
import AssignmentCard from "@/components/AssignmentCard";
import Breadcrumbs from "@/components/Breadcrumbs";

const SubjectDetailsPage = () => {
  const { semesterId, subjectId } = useParams<{ semesterId: string; subjectId: string }>();
  
  if (!semesterId || !subjectId) {
    return <Navigate to="/semesters" />;
  }

  const semester = getSemesterById(semesterId);
  if (!semester) {
    return <Navigate to="/semesters" />;
  }

  const subject = getSubjectById(semesterId, subjectId);
  if (!subject) {
    return <Navigate to={`/semesters/${semesterId}`} />;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" },
    { label: semester.name, path: `/semesters/${semesterId}` },
    { label: subject.name, path: `/semesters/${semesterId}/${subjectId}` }
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="page-title">{subject.name}</h1>
      <p className="text-paper-100 mb-2">
        {semester.name}
      </p>
      <p className="text-paper-200 mb-8">
        View or download assignments
      </p>

      <div className="space-y-4">
        {subject.assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            title={assignment.title}
            file={assignment.file}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectDetailsPage;
