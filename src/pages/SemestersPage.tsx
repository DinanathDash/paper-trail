
import { semesters } from "@/data/assignments";
import SemesterCard from "@/components/SemesterCard";
import Breadcrumbs from "@/components/Breadcrumbs";

const SemestersPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Semesters", path: "/semesters" }
  ];

  return (
    <div className="page-container">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="page-title">All Semesters</h1>
      <p className="text-paper-600 mb-8">
        Select a semester to explore subjects and assignments
      </p>

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
    </div>
  );
};

export default SemestersPage;
