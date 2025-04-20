import { fetchFileStructure, mapFileStructureToSemesters } from "@/utils/fileSystem";
import { Assignment, Subject, Semester, semesters as staticSemesters } from "./assignments";
import { toast } from "sonner";

let cachedSemesters: Semester[] = [];
let isFetching = false;

export const getDynamicSemesters = async (): Promise<Semester[]> => {
  if (cachedSemesters.length > 0) {
    return cachedSemesters;
  }
  
  if (!isFetching) {
    isFetching = true;
    try {
      const fileStructure = await fetchFileStructure();
      if (fileStructure.length === 0) {
        throw new Error("No file structure available");
      }
      
      const mappedSemesters = mapFileStructureToSemesters(fileStructure);
      if (mappedSemesters.length === 0) {
        throw new Error("No semesters found in file structure");
      }
      
      cachedSemesters = mappedSemesters;
    } catch (error) {
      console.error("Failed to fetch dynamic semesters:", error);
      toast.error("Using fallback data. Some features might be limited.");
      cachedSemesters = staticSemesters;
    } finally {
      isFetching = false;
    }
  }
  
  return cachedSemesters;
};

export const getDynamicSemesterById = async (id: string): Promise<Semester | undefined> => {
  const semesters = await getDynamicSemesters();
  return semesters.find(semester => semester.id === id);
};

export const getDynamicSubjectById = async (semesterId: string, subjectId: string): Promise<Subject | undefined> => {
  const semester = await getDynamicSemesterById(semesterId);
  if (!semester) return undefined;
  return semester.subjects.find(subject => subject.id === subjectId);
};
