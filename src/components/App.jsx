import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
// import CategorySelector from "./CategorySelector";
import { events, categories } from "../data.js";

function App() {
    const dates = events.map((event) => event.startDate).sort();
    const [sortBy, setSortBy] = useState("date");
    const [dateRange, setDateRange] = useState({
        startDate: dates[0],
        endDate: dates.reverse()[0]
    });

    const [visibleCategories, setVisibleCategories] = useState({
        Work: true,
        University: true,
    });


    function handleVisibleCategories(event) {
        const { name, checked } = event.target
        setVisibleCategories(prevState => {
            return {
                ...prevState,
                [name]: checked
            }
        })
    }

    function handleDateRange(event) {
        const { name, value } = event.target;

        setDateRange(prevState => {
            const newState = {
                ...prevState,
                [name]: value
            };

            return newState.endDate >= newState.startDate ? newState : prevState

        })
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
                            <input type="checkbox" id={category.name} name={category.name} onChange={handleVisibleCategories} checked={visibleCategories[category.name]} />
                            <label htmlFor={category.name}>{category.name}</label>
                        </div>
                    ))
                }
            </div>
            <div>
                <label>Filter by date:</label>
                <div>
                    <div>
                        <label>Start Date</label>
                        <input type="date" name="startDate" value={dateRange.startDate} onChange={handleDateRange}></input>
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="date" name="endDate" value={dateRange.endDate} onChange={handleDateRange}></input>
                    </div>
                </div>
                <div>
                    <label>Sort events by:</label>
                    <select name="category" multiple={false} onChange={handleSortBy} value={sortBy}>
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