
import { Semester, Subject, Assignment } from "@/data/assignments";

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
      throw new Error('Failed to fetch file structure');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching file structure:', error);
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
