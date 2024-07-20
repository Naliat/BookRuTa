// src/Pages/BookList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (err) {
      setError('Erro ao buscar livros. Tente novamente.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <h1 className="title">Lista de Livros</h1>
      {error && <p className="error">{error}</p>}
      <div className="books-grid">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="book-item">
              <h2>{book.title}</h2>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Categoria:</strong> {book.category}</p>
              <p><strong>Data de Publicação:</strong> {book.publicationDate}</p>
              <p><strong>País de Publicação:</strong> {book.country}</p>
              <p><strong>Descrição:</strong> {book.description}</p>
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
