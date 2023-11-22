import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import CategoryFilter from "./CategoryFilter";
import DateFilter from "./DateFilter";
import SortBy from "./SortBy";
import Timeline from "./Timeline";
import './App.css';


import { events, categories } from "../data.js";

function App() {
    const [timelineEvents, setEvents] = useState(events);
    const dates = events.map((event) => event.startDate).sort();


    const [sortBy, setSortBy] = useState("EndDate");
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
        const { value } = event.target;
        setSortBy(value)
        console.log(value)


        if (value === "Category") {

            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.category.localeCompare(b.category)
            })
            console.log(sortedEvents)

            setEvents(sortedEvents)
        }
        else if (value === "EndDate") {
            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.endDate.localeCompare(b.endDate)
            })
            console.log(sortedEvents)


            setEvents(sortedEvents)
        }
        else if (value === "StartDate") {
            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.startDate.localeCompare(b.startDate)
            })
            console.log(sortedEvents)


            setEvents(sortedEvents)
        }
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
            <Timeline
                events={timelineEvents}
                sortBy={sortBy}
            />
            <Footer />
        </div >

    );
}

export default App;