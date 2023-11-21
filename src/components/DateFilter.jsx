import React from "react";

function DateFilter(props) {

    return (
        <div>
            <label>Filter by date:</label>
            <div>
                <label>Start Date</label>
                <input type="date" name="startDate" value={props.dateRange.startDate} onChange={props.handleDateRange}></input>
            </div>

            <div>
                <label>End Date</label>
                <input type="date" name="endDate" value={props.dateRange.endDate} onChange={props.handleDateRange}></input>
            </div>
        </div>
    )
}

export default DateFilter;