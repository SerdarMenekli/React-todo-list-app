import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <div className='row mb-3'>
      <div className='col-6 m-auto'>
        <form onSubmit={handleSubmit} className='input-group '>
          <input
            type="text"
            className='form-control'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
          />
          <button type="submit" className='btn btn-outline-secondary'><FontAwesomeIcon icon={faPlus}/></button>
        </form>
      </div>
    </div>
    
  );
};

export default AddTaskForm;
