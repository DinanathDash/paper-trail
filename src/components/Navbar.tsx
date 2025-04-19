
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
    <nav className="bg-paper-700 shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Book size={24} className="text-foreground" />
          <span className="font-bold text-xl">PaperTrail</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/semesters" className="text-foreground hover:text-primary font-medium">
            Semesters
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary font-medium">
            About
          </Link>
          <Link to="/semesters">
            <Button variant="secondary" className="github-button-primary">Browse Assignments</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-paper-600 border-t border-border py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/semesters" 
              className="text-foreground hover:text-primary py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Semesters
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/semesters" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full github-button-primary">Browse Assignments</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
