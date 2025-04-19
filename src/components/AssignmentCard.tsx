
import { FileIcon, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssignmentCardProps {
  title: string;
  file: string;
}

const AssignmentCard = ({ title, file }: AssignmentCardProps) => {
  const fileExtension = file.split('.').pop()?.toUpperCase() || '';
  
  const getFileIcon = () => {
    switch (fileExtension.toLowerCase()) {
      case 'pdf':
        return <FileIcon className="h-6 w-6 text-red-500" />;
      case 'docx':
      case 'doc':
        return <FileIcon className="h-6 w-6 text-blue-500" />;
      case 'pptx':
      case 'ppt':
        return <FileIcon className="h-6 w-6 text-orange-500" />;
      case 'xlsx':
      case 'xls':
        return <FileIcon className="h-6 w-6 text-green-500" />;
      default:
        return <FileIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center">
        <div className="mr-3">
          {getFileIcon()}
        </div>
        <div>
          <h3 className="font-medium text-paper-800">{title}</h3>
          <p className="text-xs text-paper-500">{fileExtension}</p>
        </div>
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 sm:flex-initial"
          onClick={() => window.open(file, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View
        </Button>
        <Button
          size="sm"
          className="bg-paper-600 hover:bg-paper-700 flex-1 sm:flex-initial"
          asChild
        >
          <a href={file} download>
            <Download className="h-4 w-4 mr-2" />
            Download
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AssignmentCard;
