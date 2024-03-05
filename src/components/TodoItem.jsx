import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {

  const { id, text, completed, dateAdded, dateDue, priority } = todo;

  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedDateAdded, setEditedDateAdded] = useState(dateAdded);
  const [editedDateDue, setEditedDateDue] = useState(dateDue);
  const [editedPriority, setEditedPriority] = useState(priority);

  const handleEdit = () => {
    // console.log(editedPriority);
    onEdit(id, editedText, editedDateAdded, editedDateDue, editedPriority);
  };

  return (
    <div className='todo-card card-body mb-3 border border-secondary-subtle rounded'>
      {!editMode ? (
        <div className='d-flex flex-row'>
          <div className='pt-1'>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
              className='form-check-input ms-2 mt-2 me-1' />
          </div>
          <div className='flex-grow-1'>
            <div className='text-start m-2'>
              <span>
                {text}
              </span>
            </div>

            <div className='small d-flex flex-row justify-content-between align-items-center'>
              <span className='fw-light'>
                <span className='me-2'>Added: {dateAdded}</span>
                <span className='me-2'>Due: {dateDue}</span>
                <span className='me-2'>Priority: {priority}</span>
              </span>
              <span>
                <button type='button' className='btn' onClick={() => setEditMode(true)} ><FontAwesomeIcon icon={faPen} /></button>
                <button className='btn me-2' onClick={() => onDelete(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='d-flex flex-row'>
          <form>
            <div className='form-group'>
              <input
                type='text'
                id='editedText'
                className='form-control'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='editedDateAdded'>Added:</label>
              <input
                type='date'
                id='editedDateAdded'
                className='form-control'
                value={editedDateAdded}
                onChange={(e) => setEditedDateAdded(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='editedDateDue'>Due:</label>
              <input
                type='date'
                id='editedDateDue'
                className='form-control'
                value={editedDateDue}
                onChange={(e) => setEditedDateDue(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='editedPriority'>Priority:</label>
              <select
                id='editedPriority'
                className='form-control'
                value={editedPriority}
                onChange={(e) => setEditedPriority(e.target.value)}>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </div>
            <button type='button' className='btn btn-primary' onClick={() => handleEdit()}>Save</button>
            <button type='button' className='btn btn-secondary' onClick={() => setEditMode(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoItem;