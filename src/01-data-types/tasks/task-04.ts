/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
}


const book1: Book = {
  isbn: "978-0132350884",
  title: "Clean Code",
  author: "Robert C++",
  totalPages: 464,
  category: "Programming",
  isAvailable: true,
}

const book2: Book = {
  isbn: "978-1491950296",
  title: "Learning React",
  author: "Arace Blacky",
  totalPages: 350,
  category: "Web Development",
  isAvailable: false,
}

const book3: Book = {
  isbn: "978-0596007126",
  title: "Lintang's Path",
  author: "Eric Thohir",
  totalPages: 694,
  category: "Software Engineering",
  isAvailable: true,
}

console.log(book1);
console.log(book2);
console.log(book3);