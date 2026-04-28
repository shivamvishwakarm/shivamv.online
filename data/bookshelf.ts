export type ReadingStatus = "reading" | "to-read" | "completed";

export interface BookItem {
  title: string;
  author?: string;
  status: ReadingStatus;
  link?: string;
  pdf?: string;
}

export const BOOKSHELF: BookItem[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    status: "reading",
    pdf: "/book/Book-2Designing-data-intensive-applications.pdf",
  },
  {
    title: "Head First Design Pattern",
    author: "Eric Freeman & Elisabeth Robson",
    status: "to-read",
    pdf: "/book/Head First Design Patterns - Building Extensible and Maintainable Object-Oriented Software - Eric Freeman, Elisabeth Robson - O'Reilly Media (2020).pdf",
  },
  {
    title: "System design interview",
    author: "Robert C. Martin",
    status: "to-read",
    pdf: "/book/SystemDesignInterview.pdf",
  },
  {
    title: "Refactorig Guru",
    author: "",
    status: "to-read",
    link: "https://refactoring.guru/refactoring"
  },
  {
    title: "Operating Systems: Three Easy Pieces ",
    author: "ARPACI -DUSSEAU",
    status: "to-read",
    link: "/book/book.pdf"
  }
];
