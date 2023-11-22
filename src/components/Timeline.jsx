import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import TimelineElementNew from "./TimelineElementNew";

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';
import { ReactComponent as PlusIcon } from '../plus.svg';

function Timeline(props) {

    return (
        <VerticalTimeline>
            <TimelineElementNew />
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