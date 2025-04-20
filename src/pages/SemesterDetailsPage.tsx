
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDynamicSemesterById } from "@/data/dynamicAssignments";
import SubjectCard from "@/components/SubjectCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

const SemesterDetailsPage = () => {
  const { semesterId } = useParams<{ semesterId: string }>();
  
  if (!semesterId) {
    return <Navigate to="/semesters" />;
  }

  const { data: semester, isLoading, error } = useQuery({
    queryKey: ['semester', semesterId],
    queryFn: () => getDynamicSemesterById(semesterId),
  });
  
  if (error) {
    console.error("Error fetching semester:", error);
    return <Navigate to="/semesters" />;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" },
    ...(semester ? [{ label: semester.name, path: `/semesters/${semesterId}` }] : [])
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      
      {isLoading ? (
        <>
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-5 w-96 mb-8" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </>
      ) : semester ? (
        <>
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
        </>
      ) : (
        <div className="text-center text-paper-200 py-8">
          <p>Semester not found.</p>
        </div>
      )}
    </div>
  );
};

export default SemesterDetailsPage;
