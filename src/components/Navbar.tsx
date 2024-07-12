// src/Components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Sistema de Gestão de Livros</div>
      <div className="navbar-menu-icon" onClick={toggleDropdown}>
        <div className={`bar ${dropdownOpen ? 'active' : ''}`}></div>
        <div className={`bar ${dropdownOpen ? 'active' : ''}`}></div>
        <div className={`bar ${dropdownOpen ? 'active' : ''}`}></div>
      </div>
      <ul className={`navbar-dropdown-content ${dropdownOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar Livro</Link>
        </li>
        <li>
          <Link to="/update">Atualizar Livro</Link>
        </li>
        <li>
          <Link to="/list">Lista de Livros</Link>
        </li>
        <li>
          <Link to="/user">Cadastrar Usuário</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
