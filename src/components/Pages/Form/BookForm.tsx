// src/components/BookForm.tsx
import React, { useState } from 'react';
import '../Form/BookForm.css';

const BookForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Título: ${title}\nAutor: ${author}\nCategoria: ${category}\nData de Publicação: ${publicationDate}\nPaís de Publicação: ${country}\nDescrição: ${description}`);
  };

  return (
    <div className="container">
      <h1 className="title">Cadastro de Livros</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="publicationDate">Data de Publicação:</label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">País de Publicação:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Livro</button>
      </form>
    </div>
  );
};

export default BookForm;
