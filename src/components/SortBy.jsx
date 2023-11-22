import React from "react";

function SortBy(props) {

    return (
        <div>
            <label>Sort events by:</label>
            <select name="category" multiple={false} onChange={props.handleSortBy} value={props.sortBy}>
                <option value="EndDate">EndDate</option>
                <option value="StartDate">StartDate</option>
                <option value="Category">Category</option>
            </select>
        </div>
    )
}

export default SortBy;