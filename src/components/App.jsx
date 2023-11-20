import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
// import CategorySelector from "./CategorySelector";
import { events, categories } from "../data.js";

function App() {
    const dates = events.map((event) => event.startDate).sort();
    const [startDate, setStartDate] = useState(dates[0]);
    const [endDate, setEndDate] = useState(dates.reverse()[0]);
    const [visibleCategories, setVisibleCategories] = useState(categories.map((category) => category.name));
    const [sortBy, setSortBy] = useState("date");


    function handleVisibleCategories(event) {
        // do to
        const { name } = event
        console.log(event.target)
        setVisibleCategories(event.target.value);
    }

    function handleStartDate(event) {
        setStartDate(event.target.value);
    }

    function handleEndDate(event) {
        setEndDate(event.target.value);
    }

    function handleSortBy(event) {
        setSortBy(event.target.value)
    }

    return (
        <div>
            <Heading />

            <div>
                <label>Show categories:</label>
                {
                    categories.map((category) => (
                        <div>
                            <input type="checkbox" id={category.name} name={category.name} checked onChange={handleVisibleCategories} />
                            <label htmlFor={category.name}>{category.name}</label>
                        </div>
                    ))
                }

                {/* <input type="checkbox" id="scales" name="scales" checked />
                <select name="category" multiple={true} onChange={handleVisibleCategories}>
                    {categories.map((category) => { return (<option value={category.name}>{category.name}</option>) })}
                </select> */}
            </div>
            <div>
                <label>Filter by date:</label>
                <div>
                    <div>
                        <label>Start Date</label>
                        <input type="date" value={startDate} onChange={handleStartDate}></input>
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="date" value={endDate} onChange={handleEndDate}></input>
                    </div>
                </div>
                <div>
                    <label>Sort events by:</label>
                    <select name="category" multiple={false} onChange={handleSortBy}>
                        <option value="date">date</option>
                        <option value="category">category</option>
                    </select>
                </div>
            </div>


            <Footer />
        </div >

    );
}

export default App;