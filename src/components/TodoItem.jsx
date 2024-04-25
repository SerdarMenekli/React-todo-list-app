import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {

  const { id, text, completed, dateAdded, dateDue, priority } = todo;

  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedDateAdded, setEditedDateAdded] = useState(dateAdded);
  const [editedDateDue, setEditedDateDue] = useState(dateDue);
  const [editedPriority, setEditedPriority] = useState(priority);

  const handleEdit = () => {
    // console.log(editedPriority);
    const task = {...todo, text: editedText, dateAdded:editedDateAdded, dateDue:editedDateDue, priority:editedPriority}
    // onEdit(id, editedText, editedDateAdded, editedDateDue, editedPriority);
    onEdit(task);
    setEditMode(false);
  };

  return (
    <div className='todo-card card-body mb-3 border border-secondary-subtle rounded'>
      {!editMode ? (
        <div className='d-flex flex-row'>
          <div className='pt-1'>
            <input
              type="checkbox"
              checked={completed}
              onChange={
                (e) => {
                  onEdit({
                    ...todo,
                    completed: e.target.checked,
                  });
                }
                // () => onToggle(id)
              }
              className='form-check-input ms-2 mt-2 me-1' />
          </div>
          <div className='flex-grow-1'>
            <div className='text-start m-2'  style={{ whiteSpace: 'pre-line' }}>
              <span >
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
        <div className='d-flex flex-column'>
          <form className='ms-2 mt-2 me-2'>
            <div className='form-group mb-3'>
              <textarea
                id='editedText'
                className='form-control'
                rows={5}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </div>

            <div className='d-flex flex-row flex-wrap align-items-center justify-content-between'>
              <div className='form-group d-flex flex-row flex-wrap align-items-center justify-content-between w-auto'>
                <div className='form-group d-flex flex-row flex-wrap align-items-center me-2 mb-3'>
                  <label htmlFor='editedDateAdded' className='me-2'>Added:</label>
                  <input
                    type='date'
                    id='editedDateAdded'
                    className='form-control w-auto'
                    value={editedDateAdded}
                    onChange={(e) => setEditedDateAdded(e.target.value)}
                  />
                </div>
                <div className='form-group d-flex flex-row flex-wrap align-items-center mb-3'>
                  <label htmlFor='editedDateDue' className='me-2'>Due:</label>
                  <input
                    type='date'
                    id='editedDateDue'
                    className='form-control w-auto'
                    value={editedDateDue}
                    onChange={(e) => setEditedDateDue(e.target.value)}
                  />
                </div>
              </div>

              <div className='form-group d-flex flex-row flex-wrap align-items-center mb-3'>
                <label htmlFor='editedPriority' className='me-2'>Priority:</label>
                <select
                  id='editedPriority'
                  className='form-control w-auto'
                  value={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.value)}>
                  <option value='high'>High</option>
                  <option value='medium'>Medium</option>
                  <option value='low'>Low</option>
                </select>
              </div>
              <div className='form-group d-flex flex-row flex-wrap align-items-center justify-content-between mb-3'>
                <button type='button' className='btn' onClick={() => handleEdit()}><FontAwesomeIcon icon={faCheck} /></button>
                <button type='button' className='btn' onClick={() => setEditMode(false)}><FontAwesomeIcon icon={faTimes} /></button></div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoItem;