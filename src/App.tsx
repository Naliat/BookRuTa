// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationBook from './Pages/RegistrationBook';
import UpdateBook from './Pages/UpdateBook';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="AppTitle">Sistema de Gestão de Livros</h1>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<RegistrationBook />} />
            <Route path="/update" element={<UpdateBook />} />
            <Route path="/" element={<RegistrationBook />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
