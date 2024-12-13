import React from 'react';
import { TextProvider } from './context/TextContext';
import Form from './components/Form/Form';
import TextList from './components/TextList/TextList';
import './App.css';

const App = () => {
  return (
    <TextProvider>
      <div className="app">
        <h1>Gestionnaire de Dépenses</h1>
        <Form />
        <TextList />
      </div>
    </TextProvider>
  );
};

export default App;
