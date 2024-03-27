// Menu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import FilterDropdown from './FilterDropdown';
import SortDropdown from './SortDropdown';
import SearchBar from './SearchBar';
import ColorPicker from './ColorPicker';



const Menu = ({ toggleMenu, isMenuVisible, onSearch, filter, setFilter, sort, onSort, sortDirection, onSortDirectionChange, resetFilters, selectedColor, setSelectedColor, colorArray}) => {
    return (
        <div className='d-flex flex-column align-items-end justify-content-start'>
            <button type="button" className="mt-3 me-3 btn" onClick={toggleMenu}>
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
                    <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} colorArray={colorArray}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;
