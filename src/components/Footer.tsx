
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-paper-700">
              &copy; {currentYear} PaperTrail | B.Tech CSE Assignment Archive
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-paper-600 hover:text-paper-800">
              Home
            </Link>
            <Link to="/semesters" className="text-paper-600 hover:text-paper-800">
              Semesters
            </Link>
            <Link to="/about" className="text-paper-600 hover:text-paper-800">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
