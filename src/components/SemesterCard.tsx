
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
      className="github-card p-6 flex flex-col items-center text-center group"
    >
      <div className="bg-paper-500 p-3 rounded-full mb-4 group-hover:bg-paper-400 transition-colors">
        <BookOpen className="h-8 w-8 text-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary">
        {name}
      </h3>
      <p className="text-paper-200">
        {subjectCount} {subjectCount === 1 ? "Subject" : "Subjects"}
      </p>
    </Link>
  );
};

export default SemesterCard;
