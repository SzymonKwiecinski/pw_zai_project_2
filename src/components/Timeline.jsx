import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import TimelineElementNew from "./TimelineElementNew";

function Timeline(props) {

    const emptyEvent = {
        name: "",
        startDate: "",
        endDate: "",
        description: "",
        category: "Work"

    }

    return (
        <VerticalTimeline>
            <TimelineElementNew
                handleEvent={props.addNewEvent}
                initEvent={emptyEvent}
            />
            {props.events.map((event, index) => (
                <TimelineElement
                    key={index}
                    event={event}
                    indexEvent={index}
                    deleteEvent={props.deleteEvent}
                    addNewEvent={props.addNewEvent}
                    saveChangesForEvent={props.saveChangesForEvent}
                />
            ))}
        </VerticalTimeline>
    )
}


export default Timeline;