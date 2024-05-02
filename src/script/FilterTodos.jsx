export const filterTodos = (todos, filterSettings) => {
  let filteredTodos = todos;
  // console.log(todos);
  const { filter, setFilter, sort, setSort, searchQuery, setSearchQuery, sortDirection, setSortDirection } = filterSettings;

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

  // if (sort === 'text') {
  //   sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
  // } else if (sort === 'completed') {
  //   sortedTodos.sort((a, b) => a.completed - b.completed);
  // } else if (sort === 'date added' | sort === 'default') {
  //   sortedTodos.sort((a, b) => a.id - b.id);
  // } else if (sort === 'date due') {
  //   sortedTodos.sort((a, b) => a.id - b.id);
  // } else if (sort === 'priority') {
  //   sortedTodos.sort((a, b) => a.id - b.id);
  // }

  switch (sort) {
    case 'text':
      sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
      break;
    case 'completed':
      sortedTodos.sort((a, b) => a.completed - b.completed);
      break;
    case 'date added':
      sortedTodos.sort((a, b) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);

        return dateA - dateB;
      });
      break;
    case 'date due':
      sortedTodos.sort((a, b) => {
        const dateA = new Date(a.dateDue);
        const dateB = new Date(b.dateDue);

        return dateA - dateB;
      });
      break;
    case 'priority':
      const priorityOrder = { 'low': 1, 'medium': 2, 'high': 3 };

      sortedTodos.sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
      break;
    default:
      sortedTodos.sort((a, b) => a.id - b.id);
      break;
  }

  if (sortDirection === 'descending') sortedTodos.reverse()

  return sortedTodos;
}