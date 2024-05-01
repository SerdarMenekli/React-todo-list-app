import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTodosDispatchContext } from '../script/TodosContext';
import { useSelectedColorContext } from '../script/ColorContext';


const AddTaskForm = () => {
  const [text, setText] = useState('');
  const todosDispatch = useTodosDispatchContext();
  const selectedColor = useSelectedColorContext();

  const buttonStyle = {
    // backgroundColor: selectedColor,
    // borderColor: selectedColor,
    // color: 'white' // You may also set the text color here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  const onAdd = (text) => {
    console.log(nextId);
    todosDispatch({ type: 'add', id: nextId++, text: text });
    // const newTodo = { id: todos.length + 1, text, completed: false };
    // setTodos([...todos, newTodo]);
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
          <button type="submit" className='btn btn-outline-secondary add-task-btn' style={buttonStyle}><FontAwesomeIcon icon={faPlus}/></button>
        </form>
      </div>
    </div>
  );
};

let nextId = 16;

export default AddTaskForm;
