
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, FileText } from "lucide-react";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-paper-800 mb-4">
          B.Tech CSE Archive
        </h1>
        <p className="text-xl md:text-2xl text-paper-600 mb-6">
          Access all assignments, semester by semester – no GitHub redirection
        </p>
        <p className="text-lg text-paper-600 mb-8">
          A curated collection of all B.Tech CSE assignments, sorted by semester and subject.
        </p>
        <Link to="/semesters">
          <Button size="lg" className="bg-paper-600 hover:bg-paper-700">
            Browse Assignments
          </Button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <div className="bg-paper-100 p-3 rounded-full mb-4">
            <Book className="h-8 w-8 text-paper-600" />
          </div>
          <h3 className="text-xl font-semibold text-paper-800 mb-2">
            Organized by Semester
          </h3>
          <p className="text-paper-600">
            Find assignments organized neatly by semester and subject for easy access.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <div className="bg-paper-100 p-3 rounded-full mb-4">
            <FileText className="h-8 w-8 text-paper-600" />
          </div>
          <h3 className="text-xl font-semibold text-paper-800 mb-2">
            Direct Access
          </h3>
          <p className="text-paper-600">
            View and download assignments directly without any redirects to external sites.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
          <div className="bg-paper-100 p-3 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-paper-600" />
          </div>
          <h3 className="text-xl font-semibold text-paper-800 mb-2">
            Complete Collection
          </h3>
          <p className="text-paper-600">
            Access the full collection of B.Tech CSE assignments in one convenient location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
