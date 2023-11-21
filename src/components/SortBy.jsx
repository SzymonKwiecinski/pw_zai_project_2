import React from "react";

function SortBy(props) {

    return (
        <div>
            <label>Sort events by:</label>
            <select name="category" multiple={false} onChange={props.handleSortBy} value={props.sortBy}>
                <option value="date">date</option>
                <option value="category">category</option>
            </select>
        </div>
    )
}

export default SortBy;