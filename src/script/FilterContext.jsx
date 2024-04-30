import { createContext, useContext, useState } from 'react';

const FilterSettingsContext = createContext();

export const FilterSettingsProvider = ({ children }) => {
  const [filter, setFilter] = useState('default');
  const [sort, setSort] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState('ascending');

  return (
    <FilterSettingsContext.Provider
      value={{
        filter,
        setFilter,
        sort,
        setSort,
        searchQuery,
        setSearchQuery,
        sortDirection,
        setSortDirection,
      }}
    >
      {children}
    </FilterSettingsContext.Provider>
  );
};

export const useFilterSettingsContext = () => useContext(FilterSettingsContext);