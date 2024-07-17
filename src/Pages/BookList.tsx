// src/Pages/BookList.tsx
import React, { useState } from 'react';
import '../Pages/BookList.css';

interface Book {
  title: string;
  author: string;
  category: string;
  publicationDate: string;
  country: string;
  description: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addBook = (book: Book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="book-list-container">
      <h1 className="title">Lista de Livros</h1>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Data de Publicação:</strong> {book.publicationDate}</p>
            <p><strong>País de Publicação:</strong> {book.country}</p>
            <p><strong>Descrição:</strong> {book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
