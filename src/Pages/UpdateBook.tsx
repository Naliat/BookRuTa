// src/Pages/UpdateBook.tsx
import React, { useState, useEffect } from 'react';
import '../Pages/UpdateBook.css';

const UpdateBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  // Simulate fetching data
  useEffect(() => {
    // Fetch the existing book data here and update the state
    const fetchData = async () => {
      // Replace this with actual data fetching
      const existingBook = {
        title: 'Example Book Title',
        author: 'Example Author',
        category: 'Example Category',
        publicationDate: '2021-01-01',
        country: 'Example Country',
        description: 'Example Description',
      };

      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setCategory(existingBook.category);
      setPublicationDate(existingBook.publicationDate);
      setCountry(existingBook.country);
      setDescription(existingBook.description);
    };

    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the update logic here
    alert(`Dados atualizados:\nTítulo: ${title}\nAutor: ${author}\nCategoria: ${category}\nData de Publicação: ${publicationDate}\nPaís de Publicação: ${country}\nDescrição: ${description}`);
  };

  return (
    <div className="container">
      <h1 className="title">Atualização de Livro</h1>
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
        <button type="submit">Atualizar Livro</button>
      </form>
    </div>
  );
};

export default UpdateBook;
