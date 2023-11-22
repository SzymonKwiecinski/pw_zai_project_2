import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { ReactComponent as PlusIcon } from '../plus.svg';

function TimelineElementNew(props) {


    return (
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
    )
}




export default TimelineElementNew;