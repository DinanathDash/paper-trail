import { Semester, Subject, Assignment } from "@/data/assignments";
import { toast } from "sonner";

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  extension?: string;
  children?: FileNode[];
}

/**
 * Fetches the file structure from the static JSON file
 * This file will be updated by GitHub Actions
 */
export const fetchFileStructure = async (): Promise<FileNode[]> => {
  try {
    const response = await fetch('/files.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch file structure: ${response.statusText}`);
    }
    
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format. Expected JSON.");
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Invalid file structure format");
    }
    
    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error fetching file structure:', message);
    toast.error("Failed to load file structure. Please try again later.");
    return [];
  }
}

/**
 * Gets the file extension from a filename
 */
export const getFileExtension = (filename: string): string => {
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
}

/**
 * Maps our file structure to the format expected by our components
 */
export const mapFileStructureToSemesters = (fileStructure: FileNode[]): Semester[] => {
  // Find the CSE directory
  const cseDir = fileStructure.find(node => node.name === 'CSE' && node.type === 'folder');
  if (!cseDir || !cseDir.children) return [];
  
  // Map semester folders to our data structure
  return cseDir.children
    .filter(node => node.type === 'folder' && node.name.startsWith('SEM_'))
    .map(semesterNode => {
      const semesterId = semesterNode.name.toLowerCase().replace('_', '-');
      const semesterName = `Semester ${semesterNode.name.replace('SEM_', '')}`;
      
      // Map subject folders
      const subjects = semesterNode.children
        ?.filter(node => node.type === 'folder')
        .map(subjectNode => {
          const subjectId = subjectNode.name.toLowerCase().replace(/\s+/g, '-');
          
          // Map assignments in the subject folder
          const assignments = subjectNode.children
            ?.filter(node => node.type === 'file')
            .map(fileNode => {
              const extension = getFileExtension(fileNode.name);
              return {
                id: fileNode.name.toLowerCase().replace(/\s+/g, '-').replace(`.${extension}`, ''),
                title: fileNode.name.replace(`.${extension}`, ''),
                file: `/assignments/${semesterNode.name}/${subjectNode.name}/${fileNode.name}`
              };
            }) || [];
          
          return {
            id: subjectId,
            name: subjectNode.name,
            assignments
          };
        }) || [];
      
      return {
        id: semesterId,
        name: semesterName,
        subjects
      };
    });
}
