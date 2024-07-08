// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationBook from './Pages/RegistrationBook';
import UpdateBook from './Pages/UpdateBook';
import Login from './Pages/Login';
import RegisterUser from './Pages/RegisterUser'; // Importe o novo componente de cadastro de usuário
import BookList from './Pages/BookList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="AppTitle">Sistema de Gestão de Livros</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-book" element={<RegistrationBook />} />
            <Route path="/update-book" element={<UpdateBook />} />
           <Route path="/list" element={<BookList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
