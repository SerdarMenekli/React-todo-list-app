import React from "react";

const SortDropdown = ({ label1, label2, value, onChange, sortDirection, onSortDirectionChange }) => {
    return (
        <div>
            <div className="row justify-content-between">
                <div className="col-auto mb-3">
                    <label className="col-form-label" htmlFor="sort-dropdown">{label1}</label>
                </div>
                <div className="col-auto mb-3">
                    <select value={value} onChange={(e) => onChange(e.target.value)} className="form-select" id="sort-dropdown">
                        <option value="default">Default</option>
                        <option value="text">Text</option>
                        <option value="completed">Completed</option>
                        <option value="date added">Date added</option>
                        <option value="date due">Date due</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-auto mb-3">
                    <label className="col-form-label" htmlFor="sort-direction-dropdown">{label2}</label>
                </div>
                <div className="col-auto mb-3">
                    <select value={sortDirection} onChange={(e) => onSortDirectionChange(e.target.value)} className='form-select' id="sort-direction-dropdown">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SortDropdown;