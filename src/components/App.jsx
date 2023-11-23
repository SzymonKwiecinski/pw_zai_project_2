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
    // const dates = events.map((event) => event.startDate).sort();


    const [sortBy, setSortBy] = useState("EndDate");
    const [dateRange, setDateRange] = useState({
        startDate: events.map((event) => event.startDate).sort()[0],
        endDate: events.map((event) => event.endDate).sort().reverse()[0]
    });

    const [visibleCategories, setVisibleCategories] = useState({
        Work: true,
        University: true,
    });

    function addNewEvent(newEvent) {
        setEvents(
            (prevState) => {
                return [...prevState, newEvent]
            }
        )
    }

    function deleteEvent(eventToDelete) {
        const newEvents = timelineEvents.filter((e) => {
            return e !== eventToDelete
        })
        setEvents(newEvents);

        setEvents(
            (prevState) => {
                const iEventToDelete = prevState.indexOf(eventToDelete)
                const xdd = prevState.slice(iEventToDelete)
                // prevState[iOldEvent] = newEvent
                return [...xdd]
            }
        )
    }

    function saveChangesForEvent(newEvent, oldEvent) {
        // const xd = timelineEvents.indexOf(v2)

        setEvents(
            (prevState) => {
                const iOldEvent = prevState.indexOf(oldEvent)
                prevState[iOldEvent] = newEvent
                return [...prevState]
            }
        )
        // console.log(xd)
        // console.log(timelineEvents)
        // console.log(v)
        // console.log(v2)
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
        // console.log(eventsToShow)
        // console.log(11111)
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
                saveChangesForEvent={saveChangesForEvent}
            />
            <Footer />
        </div >

    );
}

export default App;