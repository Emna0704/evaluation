import React, { useContext } from 'react';
import { TextContext } from '../../context/TextContext';
import TextItem from '../TextItem/TextItem';
import './TextList.css';

const TextList = () => {
  const { state, dispatch } = useContext(TextContext);

  const handleDelete = (category, index) => {
    dispatch({
      type: 'REMOVE_TEXT',
      payload: { category, index }
    });
  };

  const totalAmount = Object.values(state.categories).reduce((total, categoryData) => {
    return total + categoryData.items.reduce((sum, item) => sum + item.amount, 0);
  }, 0);

  const isListEmpty = Object.values(state.categories).every(
    (categoryData) => categoryData.items.length === 0
  );

  if (!isListEmpty) {
    return (
      <div className="text-list">
        <h2>Montant total des dépenses: {totalAmount.toFixed(2)} €</h2>
  
        {Object.entries(state.categories).map(([category, data]) => {
          if (data.items.length === 0) return null;
  
          const categoryTotal = data.items.reduce((sum, item) => sum + item.amount, 0);
  
          return (
            <div key={category} className="category-list">
              <h3>{category} : {categoryTotal.toFixed(2)} €</h3>
              {data.items.map((item, index) => (
                <TextItem
                  key={index}
                  text={item.text}
                  category={category}
                  amount={item.amount}
                  index={index}
                  onDelete={() => handleDelete(category, index)} 
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }

 
};

export default TextList;
