import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import CategoryFilter from "./CategoryFilter";
import DateFilter from "./DateFilter";
import SortBy from "./SortBy";
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
            <CategoryFilter
                categories={categories}
                visibleCategories={visibleCategories}
                handleVisibleCategories={handleVisibleCategories}
            />
            <DateFilter
                categories={categories}
                dateRange={dateRange}
                handleDateRange={handleDateRange}
            />
            <SortBy
                sortBy={sortBy}
                handleSortBy={handleSortBy}
            />
            <Footer />
        </div >

    );
}

export default App;