import React from "react";

function DateFilter(props) {

    return (
        <div className="sort-container__group">
            <label className="sort-container__item">Filter by date:</label>
            <div className="sort-container__item">
                <label>from </label>
                <input className="sort-container__input" type="date" name="startDate" value={props.dateRange.startDate} onChange={props.handleDateRange}></input>
            </div>

            <div className="sort-container__item">
                <label>to </label>
                <input className="sort-container__input" type="date" name="endDate" value={props.dateRange.endDate} onChange={props.handleDateRange}></input>
            </div>
        </div>
    )
}

export default DateFilter;