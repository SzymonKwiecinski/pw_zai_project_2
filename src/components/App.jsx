import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import CategoryFilter from "./CategoryFilter";
import DateFilter from "./DateFilter";
import SortBy from "./SortBy";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import TimelineElementNew from "./TimelineElementForm";
import { events, categories } from "../data.js";

const emptyEvent = {
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    category: "Work",
    id: uuidv4()

}


function App() {
    const [timelineEvents, setEvents] = useState(events);

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
                return [...prevState, { ...newEvent, id: uuidv4() }]
            }
        )
    }

    function deleteEvent(eventToDelete) {
        setEvents(
            (prevState) => {
                return prevState.filter((e) => e.id !== eventToDelete.id)
            }
        )
    }

    function saveChangesForEvent(newEvent) {

        setEvents(
            (prevState) => {
                return prevState.map(e => {
                    if (e.id === newEvent.id) {
                        return newEvent
                    }
                    else {
                        return e
                    }
                })
            }
        )
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

            <VerticalTimeline>
                <TimelineElementNew
                    handleEvent={addNewEvent}
                    initEvent={emptyEvent}
                />
                {showVisibleCategories(timelineEvents).map((event) => (
                    <TimelineElement
                        key={event.id}
                        event={event}
                        deleteEvent={deleteEvent}
                        addNewEvent={addNewEvent}
                        saveChangesForEvent={saveChangesForEvent}
                    />
                ))}
            </VerticalTimeline>

            <Footer />
        </div >

    );
}

export default App;