
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-paper-700 border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-paper-200">
              &copy; {currentYear} PaperTrail | B.Tech CSE Assignment Archive
            </p>
            <p className="text-sm text-paper-300 mt-1">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-paper-200 hover:text-primary">
              Home
            </Link>
            <Link to="/semesters" className="text-paper-200 hover:text-primary">
              Semesters
            </Link>
            <Link to="/about" className="text-paper-200 hover:text-primary">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
