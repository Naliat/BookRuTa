// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationBook from './Pages/RegistrationBook';
import UpdateBook from './Pages/UpdateBook';
import Login from './Pages/Login';
import RegisterUser from './Pages/RegisterUser';
import BookList from './Pages/BookList';
import Home from './Pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationBook />} />
            <Route path="/update" element={<UpdateBook />} />
            <Route path="/list" element={<BookList />} />
            <Route path="/user" element={<RegisterUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
