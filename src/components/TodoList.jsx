import React from 'react';
import TodoItem from './TodoItem';

import { useTodosContext, useTodosDispatchContext } from '../script/TodosContext';
import { filterTodos } from '../script/FilterTodos';
import { useFilterSettingsContext } from '../script/FilterContext';

const TodoList = ({ onToggle, onEdit }) => {
  const todos = filterTodos(useTodosContext(), useFilterSettingsContext());
  const todosDispatch = useTodosDispatchContext();


  const handleDelete = (id) => {
    todosDispatch({ type: 'delete', id: id });
    //setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    todosDispatch({ type: 'edit', todo: todo })
    // setTodos([...todos.filter(todo => todo.id !== id), editedTodo]);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={onToggle}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;