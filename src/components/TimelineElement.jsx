import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';

function TimelineElement(props) {
    function addIcon(event) {
        const { category } = event
        if (category === 'Work') {
            return <WorkIcon />
        } else if (category === "University") {
            return <UniversityIcon />
        }
    }

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={props.event.startDate + " - " + props.event.endDate}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={addIcon(props.event)}
        >
            <h3 className="vertical-timeline-element-title">{props.event.name}</h3>
            <h5 className="vertical-timeline-element-subtitle">Category: [{props.event.category}]</h5>
            <p>
                {props.event.description}
            </p>
            <button>Edit</button>
            <button>Delete</button>
        </VerticalTimelineElement>
    )
}




export default TimelineElement;