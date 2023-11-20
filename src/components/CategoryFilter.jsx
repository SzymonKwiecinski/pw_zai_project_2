import React from "react";

function CategoryFilter(props) {
    const categories = props.categories

    return (
        <div>
            <select name="category" multiple={true}>
                {categories.map((category) => { return (<option value={category.name}>{category.name}</option>) })}
            </select>
        </div>
    )
}

export default CategoryFilter;