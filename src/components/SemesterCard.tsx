
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

interface SemesterCardProps {
  id: string;
  name: string;
  subjectCount: number;
}

const SemesterCard = ({ id, name, subjectCount }: SemesterCardProps) => {
  return (
    <Link
      to={`/semesters/${id}`}
      className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col items-center text-center group"
    >
      <div className="bg-paper-100 p-3 rounded-full mb-4 group-hover:bg-paper-200 transition-colors">
        <BookOpen className="h-8 w-8 text-paper-600" />
      </div>
      <h3 className="text-xl font-semibold text-paper-800 mb-2 group-hover:text-paper-700">
        {name}
      </h3>
      <p className="text-paper-500">
        {subjectCount} {subjectCount === 1 ? "Subject" : "Subjects"}
      </p>
    </Link>
  );
};

export default SemesterCard;
