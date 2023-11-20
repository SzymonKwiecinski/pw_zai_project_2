import React from "react";

function DateFilter(props) {
    const categories = props.categories

    return (
        <div>
            <select name="category">
                {categories.map((category) => { return (<option value={category.name}>{category.name}</option>) })}
            </select>
        </div>
    )
}

export default DateFilter;