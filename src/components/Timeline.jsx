import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import TimelineElementNew from "./TimelineElementNew";

function Timeline(props) {

    return (
        <VerticalTimeline>
            <TimelineElementNew
                addNewEvent={props.addNewEvent}
            />
            {props.events.map((event, index) => (
                <TimelineElement
                    key={index}
                    event={event}
                />
            ))}
        </VerticalTimeline>
    )
}


export default Timeline;