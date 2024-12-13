import React from 'react';
import './TextItem.css';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TextItem = ({ text, amount, onDelete }) => {
  return (
    <div className="text-item">
      <div className="text-item-content">
        <span>{text} : </span>
        <span>{amount}€</span>
      </div>
      <Button label={<FontAwesomeIcon icon={faTrashAlt} />}  styleType="danger" onClick={onDelete} />
    </div>
  );
};

export default TextItem;
