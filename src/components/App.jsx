import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import CategoryFilter from "./CategoryFilter";
import DateFilter from "./DateFilter";
import SortBy from "./SortBy";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';
import { ReactComponent as PlusIcon } from '../plus.svg';
import './App.css';


import { events, categories } from "../data.js";

function App() {
    const dates = events.map((event) => event.startDate).sort();

    // const map_img_category = new Map();
    // map_img_category["Work"] = WorkIcon;
    // map_img_category["Univiersity"] = UniversityIcon;

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

    function addIcon(event) {
        const { category } = event
        if (category === 'Work') {
            return <WorkIcon />
        } else if (category === "University") {
            return <UniversityIcon />
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
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<PlusIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Add Event</h3>
                    <h5 className="vertical-timeline-element-subtitle">Category:</h5>
                    <p>
                        ""
                    </p>
                    <button>Add</button>
                </VerticalTimelineElement>
                {events.map((event) => (

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={event.startDate + " - " + event.endDate}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={addIcon(event)}
                    >
                        <h3 className="vertical-timeline-element-title">{event.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">Category: [{event.category}]</h5>
                        <p>
                            {event.description}
                        </p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <Footer />
        </div >

    );
}

export default App;