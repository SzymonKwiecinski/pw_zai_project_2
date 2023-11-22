import React from "react";

function CategoryFilter(props) {

    return (
        <div>
            <label>Show categories:</label>
            {
                props.categories.map((category, index) => (
                    <div key={index}>
                        <input type="checkbox" id={category.name} name={category.name} onChange={props.handleVisibleCategories} checked={props.visibleCategories[category.name]} />
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryFilter;