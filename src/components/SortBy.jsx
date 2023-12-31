import React from "react";

function SortBy(props) {

    return (
        <div className="sort-container__group">
            <label className="sort-container__item">Sort events by:</label>
            <select className="sort-container__selector" name="category" multiple={false} onChange={props.handleSortBy} value={props.sortBy}>
                <option value="EndDate">EndDate</option>
                <option value="StartDate">StartDate</option>
                <option value="Category">Category</option>
            </select>
        </div>
    )
}

export default SortBy;