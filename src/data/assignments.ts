
export interface Assignment {
  id: string;
  title: string;
  file: string;
}

export interface Subject {
  id: string;
  name: string;
  assignments: Assignment[];
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export const semesters: Semester[] = [
  {
    id: "semester-1",
    name: "Semester 1",
    subjects: [
      {
        id: "mathematics",
        name: "Mathematics",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-1/mathematics/assignment-1.pdf"
          },
          {
            id: "assignment-2",
            title: "Assignment 2",
            file: "/assignments/semester-1/mathematics/assignment-2.docx"
          }
        ]
      },
      {
        id: "physics",
        name: "Physics",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-1/physics/assignment-1.pdf"
          }
        ]
      },
      {
        id: "programming-in-c",
        name: "Programming in C",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-1/programming-in-c/assignment-1.pdf"
          }
        ]
      },
      {
        id: "engineering-mechanics",
        name: "Engineering Mechanics",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-1/engineering-mechanics/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-2",
    name: "Semester 2",
    subjects: [
      {
        id: "data-structures",
        name: "Data Structures",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-2/data-structures/assignment-1.pdf"
          }
        ]
      },
      {
        id: "digital-electronics",
        name: "Digital Electronics",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-2/digital-electronics/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-3",
    name: "Semester 3",
    subjects: [
      {
        id: "object-oriented-programming",
        name: "Object Oriented Programming",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-3/object-oriented-programming/assignment-1.pdf"
          }
        ]
      },
      {
        id: "computer-organization",
        name: "Computer Organization",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-3/computer-organization/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-4",
    name: "Semester 4",
    subjects: [
      {
        id: "operating-systems",
        name: "Operating Systems",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-4/operating-systems/assignment-1.pdf"
          }
        ]
      },
      {
        id: "database-management",
        name: "Database Management",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-4/database-management/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-5",
    name: "Semester 5",
    subjects: [
      {
        id: "software-engineering",
        name: "Software Engineering",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-5/software-engineering/assignment-1.pdf"
          }
        ]
      },
      {
        id: "computer-networks",
        name: "Computer Networks",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-5/computer-networks/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-6",
    name: "Semester 6",
    subjects: [
      {
        id: "web-technologies",
        name: "Web Technologies",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-6/web-technologies/assignment-1.pdf"
          }
        ]
      },
      {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-6/artificial-intelligence/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-7",
    name: "Semester 7",
    subjects: [
      {
        id: "machine-learning",
        name: "Machine Learning",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-7/machine-learning/assignment-1.pdf"
          }
        ]
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-7/cloud-computing/assignment-1.pdf"
          }
        ]
      }
    ]
  },
  {
    id: "semester-8",
    name: "Semester 8",
    subjects: [
      {
        id: "blockchain",
        name: "Blockchain",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-8/blockchain/assignment-1.pdf"
          }
        ]
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        assignments: [
          {
            id: "assignment-1",
            title: "Assignment 1",
            file: "/assignments/semester-8/cybersecurity/assignment-1.pdf"
          }
        ]
      }
    ]
  }
];

export const getSemesterById = (id: string): Semester | undefined => {
  return semesters.find(semester => semester.id === id);
};

export const getSubjectById = (semesterId: string, subjectId: string): Subject | undefined => {
  const semester = getSemesterById(semesterId);
  if (!semester) return undefined;
  return semester.subjects.find(subject => subject.id === subjectId);
};
