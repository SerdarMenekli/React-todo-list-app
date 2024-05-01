import { useReducer, useContext, createContext } from "react";
import { getCurrentDate } from "../utility/GetCurrentDate";
import { FilterSettingsProvider } from "./FilterContext";
import { ColorProvider } from "./ColorContext";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
    const [todos, todosDispatch] = useReducer(todoReducer, initialTodos);

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={todosDispatch}>
                <FilterSettingsProvider>
                    <ColorProvider>
                        {children}
                    </ColorProvider>
                </FilterSettingsProvider>
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'add':
            return [...todos, { id: action.id, text: action.text, completed: false, dateAdded: getCurrentDate('-'), dateDue: getCurrentDate('-'), priority: 'medium' }];
        case 'delete':
            return todos.filter(todo => (todo.id !== action.id));
        // case 'toggle':
        //   return todos.map((todo) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case 'edit':
            return [...todos.filter(todo => todo.id !== action.todo.id), action.todo];
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function useTodosContext() {
    return useContext(TodosContext);
}

export function useTodosDispatchContext() {
    return useContext(TodosDispatchContext);
}

const initialTodos = [
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
];