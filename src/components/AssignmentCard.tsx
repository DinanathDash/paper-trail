
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
        return <FileIcon className="h-6 w-6 text-accent" />;
      case 'docx':
      case 'doc':
        return <FileIcon className="h-6 w-6 text-primary" />;
      case 'pptx':
      case 'ppt':
        return <FileIcon className="h-6 w-6 text-destructive" />;
      case 'xlsx':
      case 'xls':
        return <FileIcon className="h-6 w-6 text-muted" />;
      default:
        return <FileIcon className="h-6 w-6 text-foreground" />;
    }
  };

  return (
    <div className="github-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center">
        <div className="mr-3">
          {getFileIcon()}
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-xs text-paper-200">{fileExtension}</p>
        </div>
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 sm:flex-initial github-button"
          onClick={() => window.open(file, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View
        </Button>
        <Button
          size="sm"
          className="flex-1 sm:flex-initial github-button-primary"
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
