import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';
import { ReactComponent as PlusIcon } from '../plus.svg';

function Timeline(props) {




    function addIcon(event) {
        const { category } = event
        if (category === 'Work') {
            return <WorkIcon />
        } else if (category === "University") {
            return <UniversityIcon />
        }
    }

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                key="-1"
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
            {props.events.map((event, index) => (

                <VerticalTimelineElement
                    key={index}
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
    )
}


export default Timeline;