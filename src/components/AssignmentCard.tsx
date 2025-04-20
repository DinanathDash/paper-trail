import { FileArchive, FileAudio, FileCode, FileImage, FileSpreadsheet, FileText, FileType, FileVideo, FileIcon, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AssignmentCardProps {
  title: string;
  file: string;
}

const AssignmentCard = ({ title, file }: AssignmentCardProps) => {
  const fileExtension = file.split('.').pop()?.toUpperCase() || '';
  
  const getFileIcon = () => {
    switch (fileExtension.toLowerCase()) {
      // Documents
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-6 w-6 text-blue-500" />;
      case 'txt':
        return <FileText className="h-6 w-6 text-gray-500" />;
      
      // Presentations
      case 'ppt':
      case 'pptx':
        return <FileText className="h-6 w-6 text-orange-500" />;
      
      // Spreadsheets
      case 'xls':
      case 'xlsx':
      case 'csv':
        return <FileSpreadsheet className="h-6 w-6 text-green-500" />;
      
      // Images
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
      case 'webp':
        return <FileImage className="h-6 w-6 text-purple-500" />;
      
      // Audio
      case 'mp3':
      case 'wav':
      case 'ogg':
        return <FileAudio className="h-6 w-6 text-pink-500" />;
      
      // Video
      case 'mp4':
      case 'webm':
      case 'avi':
        return <FileVideo className="h-6 w-6 text-indigo-500" />;
      
      // Code
      case 'js':
      case 'ts':
      case 'jsx':
      case 'tsx':
      case 'html':
      case 'css':
      case 'json':
      case 'xml':
      case 'java':
      case 'py':
      case 'c':
      case 'cpp':
      case 'cs':
      case 'go':
      case 'php':
      case 'rb':
      case 'swift':
      case 'sh':
      case 'bash':
      case 'sql':
      case 'yaml':
      case 'yml':
      case 'md':
      case 'markdown':
        return <FileCode className="h-6 w-6 text-yellow-500" />;
      
      // Archives
      case 'zip':
      case 'rar':
      case '7z':
      case 'tar':
      case 'gz':
        return <FileArchive className="h-6 w-6 text-amber-500" />;
      
      // Default
      default:
        return <FileType className="h-6 w-6 text-gray-500" />;
    }
  };

  const handleView = async () => {
    const extension = fileExtension.toLowerCase();
    const isViewable = [
      'pdf', 'txt', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
      'mp3', 'wav', 'ogg', 'mp4', 'webm', 'html'
    ].includes(extension);

    try {
      // Check if file exists
      const response = await fetch(file, { method: 'HEAD' });
      
      if (!response.ok) {
        toast.error(`File not found: ${file}`);
        return;
      }
      
      if (isViewable) {
        window.open(file, '_blank');
      } else {
        // For non-viewable files, trigger download
        const link = document.createElement('a');
        link.href = file;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      toast.error("Error accessing file. It may not exist or you don't have permission.");
      console.error("File access error:", error);
    }
  };

  const handleDownload = async () => {
      try {
        // Check if file exists
        const response = await fetch(file, { method: 'HEAD' });
        
        if (!response.ok) {
          toast.error(`File not found: ${file}`);
          return;
        }
        
        // Trigger download
        const link = document.createElement('a');
        link.href = file;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        toast.error("Error downloading file. It may not exist or you don't have permission.");
        console.error("File download error:", error);
      }
    };

  return (
    <div className="github-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-paper-600/50 transition-colors">
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
          onClick={handleView}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View
        </Button>
        <Button
          size="sm"
          className="flex-1 sm:flex-initial github-button-primary"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default AssignmentCard;
