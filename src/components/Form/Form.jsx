import React, { useContext, useState } from 'react';
import { TextContext } from '../../context/TextContext';
import Button from '../Button/Button';
import './Form.css';

const Form = () => {
  const { state, dispatch } = useContext(TextContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const categoriesList = [
    'Alimentation',
    'Logement',
    'Transport',
    'Divertissement',
    'Santé',
    'Éducation',
    'Autres'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    setError('');
    dispatch({
      type: 'ADD_TEXT',
      payload: { text, amount: parseFloat(amount), category }
    });
    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Ajouter une dépense</h2>
        <div className='form-group'>
          <label className='label'>Nom de la dépense : </label>
          <input
          className='input'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Exemple : Courses"
          />
        </div>
        <div className='form-group'>
          <label className='label'>Montant : </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                setAmount(value);
              }
            }}
            placeholder="Montant en €"
          />
        </div>
        <div className='form-group'>
          <label className='label'>Catégorie : </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Sélectionner une catégorie</option>
            {categoriesList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="error-message">{error}</p>}
        <Button label="Ajouter la dépense" styleType="primary" />
      </form>

    </div>
  );
};

export default Form;
