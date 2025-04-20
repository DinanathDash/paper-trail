
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDynamicSemesters } from "@/data/dynamicAssignments";
import SemesterCard from "@/components/SemesterCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

const SemestersPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" }
  ];

  const { data: semesters = [], isLoading, error } = useQuery({
    queryKey: ['semesters'],
    queryFn: getDynamicSemesters,
  });

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="page-title">All Semesters</h1>
      <p className="text-paper-200 mb-8">
        Select a semester to explore subjects and assignments
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="github-card p-6">
              <Skeleton className="h-12 w-12 rounded-full mb-4 mx-auto" />
              <Skeleton className="h-6 w-24 mb-2 mx-auto" />
              <Skeleton className="h-4 w-16 mx-auto" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-paper-200 py-8">
          <p>Failed to load semesters. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {semesters.map((semester) => (
            <SemesterCard
              key={semester.id}
              id={semester.id}
              name={semester.name}
              subjectCount={semester.subjects.length}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SemestersPage;
