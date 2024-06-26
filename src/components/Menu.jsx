// Menu.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { useFilterSettingsContext } from '../script/FilterContext';
import FilterHandlers from '../script/FilterHandlers';

import FilterDropdown from './FilterDropdown';
import SortDropdown from './SortDropdown';
import SearchBar from './SearchBar';
import ColorPicker from './ColorPicker';


// toggleMenu, isMenuVisible, onSearch, filter, setFilter, sort, onSort, sortDirection, onSortDirectionChange, resetFilters,
const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    // const toggleMenu = () => { setIsMenuVisible(!isMenuVisible); };

    const settings = useFilterSettingsContext();
    // console.log(settings);
    const { filter, setFilter, sort, setSort, searchQuery, setSearchQuery, sortDirection, setSortDirection } = settings;
    // const { onSearch, onSort, onSortDirectionChange, toggleMenu, resetFilters } = FilterHandlers;
    
    const onSearch = (query) => { setSearchQuery(query); };
    const onSort = (value) => { setSort(value); };
    const onSortDirectionChange = (value) => { setSortDirection(value); };
    
    const resetFilters = () => {
      setFilter('default');
      setSort('default');
      setSortDirection('default');
    };


    return (
        <div className='fixed-top d-flex flex-column align-items-end justify-content-start' style={{ left: 'auto' }}>
            <button type="button" className="mt-3 me-3 btn" onClick={ ()=>{ setIsMenuVisible(!isMenuVisible); } }>
                <FontAwesomeIcon icon={isMenuVisible ? faChevronRight : faChevronLeft} />
            </button>
            <div className={`menu mt-3 me-3 justify-content-start card ${isMenuVisible ? '' : 'd-none'}`}>
                <div className='card-body text-end'>
                    <SearchBar onSearch={onSearch} />
                    <FilterDropdown value={filter} onChange={setFilter} label={"Filter:"} />
                    <SortDropdown label1={"Sort by:"} label2={"Sort Direction:"} value={sort} onChange={onSort} sortDirection={sortDirection} onSortDirectionChange={onSortDirectionChange} />
                    <button type="button" className="btn btn-secondary mb-3" onClick={resetFilters}>
                        Reset
                    </button>
                    <ColorPicker/>
                </div>
            </div>
        </div>
    );
};

export default Menu;
