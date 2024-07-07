// src/App.tsx
import React from 'react';
import BookForm from './components/Form/BookForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        <BookForm />
      </header>
    </div>
  );
};

export default App;
