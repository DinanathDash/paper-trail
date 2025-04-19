
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
      className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex items-center group"
    >
      <div className="bg-paper-100 p-3 rounded-full mr-4 group-hover:bg-paper-200 transition-colors">
        <BookText className="h-6 w-6 text-paper-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-paper-800 group-hover:text-paper-700">
          {name}
        </h3>
        <p className="text-paper-500">
          {assignmentCount} {assignmentCount === 1 ? "Assignment" : "Assignments"}
        </p>
      </div>
    </Link>
  );
};

export default SubjectCard;
