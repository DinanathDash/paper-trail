
import { Link } from "react-router-dom";
import { BookText } from "lucide-react";

interface SubjectCardProps {
  semesterId: string;
  id: string;
  name: string;
  assignmentCount: number;
}

const SubjectCard = ({ semesterId, id, name, assignmentCount }: SubjectCardProps) => {
  return (
    <Link
      to={`/semesters/${semesterId}/${id}`}
      className="github-card p-6 flex items-center group"
    >
      <div className="bg-paper-500 p-3 rounded-full mr-4 group-hover:bg-paper-400 transition-colors">
        <BookText className="h-6 w-6 text-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
          {name}
        </h3>
        <p className="text-paper-200">
          {assignmentCount} {assignmentCount === 1 ? "Assignment" : "Assignments"}
        </p>
      </div>
    </Link>
  );
};

export default SubjectCard;
