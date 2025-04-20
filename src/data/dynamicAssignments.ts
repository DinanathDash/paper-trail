
import { fetchFileStructure, mapFileStructureToSemesters } from "@/utils/fileSystem";
import { Assignment, Subject, Semester } from "./assignments";

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
      cachedSemesters = mapFileStructureToSemesters(fileStructure);
    } catch (error) {
      console.error("Failed to fetch dynamic semesters:", error);
      // Fall back to static data if available
      const { semesters } = await import("./assignments");
      cachedSemesters = semesters;
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
