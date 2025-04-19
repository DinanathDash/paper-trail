
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center flex-wrap text-sm text-paper-500 mb-6">
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center">
          {index > 0 && <ChevronRight size={14} className="mx-2" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-paper-700">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-paper-700 hover:underline">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
