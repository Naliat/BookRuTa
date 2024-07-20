import React, { useState } from 'react';
import axios from 'axios';

const RegistrationBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage(null);

    try {
      await axios.post('http://localhost:3001/registerBook', {
        title,
        author,
        category,
        publicationDate,
        country,
        description: description || 'Sem descrição' // Adiciona valor padrão
      });

      setMessage('Livro cadastrado com sucesso!');

      setTitle('');
      setAuthor('');
      setCategory('');
      setPublicationDate('');
      setCountry('');
      setDescription('');
    } catch (err) {
      setMessage('Erro ao cadastrar o livro. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      {message && <p className="message">{message}</p>}
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
          <label htmlFor="country">País:</label>
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
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegistrationBook;
