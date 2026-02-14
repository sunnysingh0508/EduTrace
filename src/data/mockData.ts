export interface ClassData {
    id: number;
    name: string;
    subject: string;
    section: string;
    semester: string;
    students: number;
    lectures: number;
    progress: number;
}

export const classesData: ClassData[] = [
    {
        id: 1,
        name: "Data Structures",
        subject: "Computer Science",
        section: "CSE-3A",
        semester: "Sem 3",
        students: 62,
        lectures: 24,
        progress: 75
    },
    {
        id: 2,
        name: "Database Systems",
        subject: "Computer Science",
        section: "CSE-3B",
        semester: "Sem 3",
        students: 58,
        lectures: 18,
        progress: 45
    },
    {
        id: 3,
        name: "Web Development",
        subject: "Information Tech",
        section: "IT-5A",
        semester: "Sem 5",
        students: 45,
        lectures: 30,
        progress: 90
    },
    {
        id: 4,
        name: "Operating Systems",
        subject: "Computer Science",
        section: "CSE-4A",
        semester: "Sem 4",
        students: 60,
        lectures: 12,
        progress: 30
    },
    {
        id: 5,
        name: "Computer Networks",
        subject: "Information Tech",
        section: "IT-5B",
        semester: "Sem 5",
        students: 55,
        lectures: 20,
        progress: 60
    },
];
