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

    function addNewEvent(newEvent) {
        setEvents([newEvent, ...timelineEvents])
    }

    function deleteEvent(eventToDelete) {
        const newEvents = timelineEvents.filter((e) => {
            return e !== eventToDelete
        })
        setEvents(newEvents);
    }


    function handleVisibleCategories(event) {
        const { name, checked } = event.target

        setVisibleCategories(prevState => {
            return {
                ...prevState,
                [name]: checked
            }
        })
    }

    function showVisibleCategories(eventsToShow) {

        eventsToShow = eventsToShow.filter((event) => { return (event.endDate <= dateRange.endDate) })
        eventsToShow = eventsToShow.filter((event) => { return (event.startDate >= dateRange.startDate) })

        if (visibleCategories.University && visibleCategories.Work) {
            return eventsToShow
        }
        else if (visibleCategories.University) {
            return eventsToShow.filter((event) => { return (event.category == "University") })
        }
        else if (visibleCategories.Work) {
            return eventsToShow.filter((event) => { return (event.category == "Work") })
        }
        return []
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

        if (value === "Category") {

            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.category.localeCompare(b.category)
            })

            setEvents(sortedEvents)
        }
        else if (value === "EndDate") {
            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.endDate.localeCompare(b.endDate)
            })

            setEvents(sortedEvents)
        }
        else if (value === "StartDate") {
            const sortedEvents = timelineEvents.sort((a, b) => {
                return a.startDate.localeCompare(b.startDate)
            })

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
                events={showVisibleCategories(timelineEvents)}
                sortBy={sortBy}
                addNewEvent={addNewEvent}
                deleteEvent={deleteEvent}
            />
            <Footer />
        </div >

    );
}

export default App;