export const filterTodos = (todos, filterSettings) => {
    let filteredTodos = todos;
    // console.log(todos);
    const {filter, setFilter, sort, setSort, searchQuery, setSearchQuery, sortDirection, setSortDirection} = filterSettings;

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