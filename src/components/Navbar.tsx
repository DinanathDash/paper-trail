
import { Link } from "react-router-dom";
import { Book, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-paper-800">
          <Book size={24} className="text-paper-600" />
          <span className="font-bold text-xl">PaperTrail</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-paper-700 hover:text-paper-900 font-medium">
            Home
          </Link>
          <Link to="/semesters" className="text-paper-700 hover:text-paper-900 font-medium">
            Semesters
          </Link>
          <Link to="/about" className="text-paper-700 hover:text-paper-900 font-medium">
            About
          </Link>
          <Link to="/semesters">
            <Button className="bg-paper-600 hover:bg-paper-700">Browse Assignments</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-paper-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-paper-700 hover:text-paper-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/semesters" 
              className="text-paper-700 hover:text-paper-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Semesters
            </Link>
            <Link 
              to="/about" 
              className="text-paper-700 hover:text-paper-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/semesters" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-paper-600 hover:bg-paper-700">Browse Assignments</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
