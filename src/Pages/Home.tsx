import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Sistema de Gestão de Livros</h1>
      <p className="home-description">
        O site foi desenvolvido com foco em proporcionar uma experiência intuitiva e funcional para os usuários. Ele inclui funcionalidades como cadastro de livros, atualização de informações, login de usuários e registro de novos usuários. A página inicial apresenta um menu de navegação facilitado por um dropdown responsivo, garantindo acessibilidade em diferentes dispositivos. O objetivo principal é oferecer uma plataforma eficiente para gestão e interação com informações relacionadas a livros, visando simplicidade e eficácia na utilização.
      </p>
    </div>
  );
};

export default Home;
