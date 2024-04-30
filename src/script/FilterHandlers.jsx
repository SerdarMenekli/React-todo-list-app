// export const onSearch = (query, setSearchQuery) => { setSearchQuery(query); };
// export const onSort = (value, setSort) => { setSort(value); };
// export const onSortDirectionChange = (value, setSortDirection) => { setSortDirection(value); };
// export const toggleMenu = (isMenuVisible, setIsMenuVisible) => { setIsMenuVisible(!isMenuVisible); };
// export const resetFilters = (setFilter, setSort, setSortDirection) => {
//   setFilter('default');
//   setSort('default');
//   setSortDirection('default');
// };

const FilterHandlers = {
    onSearch: (query, setSearchQuery) => { setSearchQuery(query); },
    onSort: (value, setSort) => { setSort(value); },
    onSortDirectionChange: (value, setSortDirection) => { setSortDirection(value); },

    toggleMenu: (isMenuVisible, setIsMenuVisible) => { setIsMenuVisible(!isMenuVisible); },
    
    resetFilters: (setFilter, setSort, setSortDirection) => {
      setFilter('default');
      setSort('default');
      setSortDirection('default');
    }
  };
  
  export default FilterHandlers;