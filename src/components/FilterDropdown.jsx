import React from "react";

const FilterDropdown = ({value, onChange, label}) => {
    return(
        <div className="row justify-content-between">
            <div className="col-auto mb-3">
                <label className="col-form-label" htmlFor="filter-select">{label}</label>
            </div>
            <div className="col-auto mb-3">
                <select value={value} onChange={(e) => onChange(e.target.value)} className="form-select" id="filter-select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            </div>
        </div>
        
    );
}

export default FilterDropdown;