import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import TodoList from './components/TodoList';
import AddTaskForm from './components/AddTaskForm';
import FilterDropdown from './components/FilterDropdown';
import SortDropdown from './components/SortDropdown';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import { faL } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false, dateAdded: '2024-02-07', dateDue: '2024-02-14', priority: 'high' },
    { id: 2, text: 'Build a todo app', completed: false, dateAdded: '2024-02-08', dateDue: '2024-02-15', priority: 'medium' },
    { id: 3, text: 'Deploy the app', completed: false, dateAdded: '2024-02-09', dateDue: '2024-02-16', priority: 'low' },
    { id: 4, text: 'Read a book', completed: false, dateAdded: '2024-02-10', dateDue: '2024-02-17', priority: 'high' },
    { id: 5, text: 'Exercise', completed: false, dateAdded: '2024-02-11', dateDue: '2024-02-18', priority: 'medium' },
    { id: 6, text: 'Cook dinner', completed: false, dateAdded: '2024-02-12', dateDue: '2024-02-19', priority: 'low' },
    { id: 7, text: 'Go for a walk', completed: false, dateAdded: '2024-02-13', dateDue: '2024-02-20', priority: 'high' },
    { id: 8, text: 'Watch a movie', completed: false, dateAdded: '2024-02-14', dateDue: '2024-02-21', priority: 'medium' },
    { id: 9, text: 'Call a friend', completed: false, dateAdded: '2024-02-15', dateDue: '2024-02-22', priority: 'low' },
    { id: 10, text: 'Go to the gym', completed: false, dateAdded: '2024-02-16', dateDue: '2024-02-23', priority: 'high' },
    { id: 11, text: 'Write a blog post', completed: false, dateAdded: '2024-02-17', dateDue: '2024-02-24', priority: 'medium' },
    { id: 12, text: 'Clean the house', completed: false, dateAdded: '2024-02-18', dateDue: '2024-02-25', priority: 'low' },
    { id: 13, text: 'Go grocery shopping', completed: false, dateAdded: '2024-02-19', dateDue: '2024-02-26', priority: 'high' },
    { id: 14, text: 'Read emails', completed: false, dateAdded: '2024-02-20', dateDue: '2024-02-27', priority: 'medium' },
    { id: 15, text: 'Do laundry', completed: false, dateAdded: '2024-02-21', dateDue: '2024-02-28', priority: 'low' },
  ]);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [filter, setFilter] = useState('default');
  const [sort, setSort] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState('ascending');
  const [selectedColor, setSelectedColor] = useState('gray');
  const colorArray = ["gray", "red", "orange", "yellow", "green", "blue", "violet"]
  // const [sortAsc, setSortAsc] = useState(true);

  const onDelete = (id) => { setTodos(todos.filter((todo) => todo.id !== id)); };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const onAdd = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };
  // const onEdit = (id, text) => {
  //   const newText = window.prompt('Edit task:', text);
  //   if (!newText || newText.trim() === '') return;
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, text: newText } : todo
  //     )
  //   );
  // };
  const onEdit = (id, editedText, editedDateAdded, editedDateDue, editedPriority) => {
    // Find the todo item by id
    const editedTodo = todos.find(todo => todo.id === id);
    // Update the todo item with new values
    editedTodo.text = editedText;
    editedTodo.dateAdded = editedDateAdded;
    editedTodo.dateDue = editedDateDue;
    editedTodo.priority = editedPriority;
    // Update the state with the updated todo item
    setTodos([...todos.filter(todo => todo.id !== id), editedTodo]);
  };
  const filterTodos = () => {
    let filteredTodos = todos;

    if (filter === 'completed') {
      filteredTodos = filteredTodos.filter((todo) => todo.completed);
    }
    else if (filter === 'incomplete') {
      filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    }

    if (searchQuery) {
      filteredTodos = filteredTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    let sortedTodos = filteredTodos;

    if (sort === 'text') {
      sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sort === 'completed') {
      sortedTodos.sort((a, b) => a.completed - b.completed);
    } else if (sort === 'date added' | sort === 'default') {
      sortedTodos.sort((a, b) => a.id - b.id);
    } else if (sort === 'date due') {
      sortedTodos.sort((a, b) => a.id - b.id);
    } else if (sort === 'priority') {
      sortedTodos.sort((a, b) => a.id - b.id);
    }

    if (sortDirection === 'descending') sortedTodos.reverse()

    return sortedTodos;
  }
  const onSearch = (query) => { setSearchQuery(query); };
  const onSort = (value) => { setSort(value); };
  const onSortDirectionChange = (value) => { setSortDirection(value); };
  const toggleMenu = () => { setIsMenuVisible(!isMenuVisible); };
  const resetFilters = () => {
    setFilter('default');
    setSort('default');
    setSortDirection('default');
  };

  return (
    <div className=''>
      <div className='row'>
        <div className='col-lg-3 d-none d-lg-block'>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='container text-center'>
            <h1 className='mt-3 mb-3 text-center'>Todo List</h1>
            <AddTaskForm onAdd={onAdd} />
            <TodoList todos={filterTodos()} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
          </div>
        </div>
        <div className='col-12 col-lg-3'>
          <div className='fixed-top' style={{ left: 'auto' }}>
            <Menu
              onSearch={onSearch}
              filter={filter}
              setFilter={setFilter}
              sort={sort}
              onSort={onSort}
              sortDirection={sortDirection}
              onSortDirectionChange={onSortDirectionChange}
              isMenuVisible={isMenuVisible}
              toggleMenu={toggleMenu}
              resetFilters={resetFilters}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              colorArray={colorArray}
            />
          </div>

        </div>

        {/* <div className='col-3 d-flex flex-column align-items-end justify-content-start'>
          <button type="button" className="mt-3 me-3 btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuVisible ? faChevronRight : faChevronLeft} />
          </button>
          <div className={`mt-3 me-3 justify-content-start card ${isMenuVisible ? '' : 'd-none'}`}>
            <div className='card-body'>
              <SearchBar onSearch={onSearch} />
              <FilterDropdown value={filter} onChange={setFilter} label={"Filter:"} />
              <SortDropdown label1={"Sort by:"} label2={"Sort Direction:"} value={sort} onChange={onSort} sortDirection={sortDirection} onSortDirectionChange={onSortDirectionChange} />
            </div>

            {/* <div className='row d-flex align-items-center justify-content-center'>
              <div className="col-auto">
                <SearchBar onSearch={onSearch} />
              </div>
              <div className="col-auto">
                <FilterDropdown value={filter} onChange={setFilter} label={"Filter:"} />
              </div>
            </div>
          
          <SortDropdown label={"Sort by:"} value={sort} onChange={onSort} sortDirection={sortDirection} onSortDirectionChange={onSortDirectionChange} />
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default App;