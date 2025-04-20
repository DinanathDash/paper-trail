
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDynamicSemesterById, getDynamicSubjectById } from "@/data/dynamicAssignments";
import AssignmentCard from "@/components/AssignmentCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

const SubjectDetailsPage = () => {
  const { semesterId, subjectId } = useParams<{ semesterId: string; subjectId: string }>();
  
  if (!semesterId || !subjectId) {
    return <Navigate to="/semesters" />;
  }

  const { data: semester, isLoading: isSemesterLoading } = useQuery({
    queryKey: ['semester', semesterId],
    queryFn: () => getDynamicSemesterById(semesterId),
  });

  const { data: subject, isLoading: isSubjectLoading } = useQuery({
    queryKey: ['subject', semesterId, subjectId],
    queryFn: () => getDynamicSubjectById(semesterId, subjectId),
    enabled: !!semester,
  });

  const isLoading = isSemesterLoading || isSubjectLoading;

  if (!isLoading && (!semester || !subject)) {
    return <Navigate to={semester ? `/semesters/${semesterId}` : "/semesters"} />;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" },
    ...(semester ? [{ label: semester.name, path: `/semesters/${semesterId}` }] : []),
    ...(subject ? [{ label: subject.name, path: `/semesters/${semesterId}/${subjectId}` }] : [])
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      
      {isLoading ? (
        <>
          <Skeleton className="h-12 w-64 mb-2" />
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-5 w-96 mb-8" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </>
      ) : subject ? (
        <>
          <h1 className="page-title">{subject.name}</h1>
          <p className="text-paper-100 mb-2">
            {semester?.name}
          </p>
          <p className="text-paper-200 mb-8">
            View or download assignments
          </p>

          {subject.assignments.length > 0 ? (
            <div className="space-y-4">
              {subject.assignments.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  title={assignment.title}
                  file={assignment.file}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-paper-200 py-8">
              <p>No assignments available for this subject yet.</p>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default SubjectDetailsPage;
