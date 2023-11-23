import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimelineElementNew from "./TimelineElementNew";

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';

function TimelineElement(props) {
    const [editableState, setEditableState] = useState(false)
    const [showedEvent, setShowedEvent] = useState(props.event)
    let oldEvent = props.event;

    function addIcon(event) {
        const { category } = event
        if (category === 'Work') {
            return <WorkIcon />
        } else if (category === "University") {
            return <UniversityIcon />
        }
    }

    function handleShowedEvent(event) {
        setShowedEvent(event)
        // console.log(event)
        // console.log(oldEvent)
        props.saveChangesForEvent(event, oldEvent)
        handleEditableState()
    }

    function deleteEvent() {
        props.deleteEvent(showedEvent);
    }

    function handleEditableState() {
        if (editableState === true) {
            setEditableState(false)
        }
        else {
            setEditableState(true)
        }
    }

    return (
        (!editableState) ?
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={showedEvent.startDate + " - " + showedEvent.endDate}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={addIcon(showedEvent)}
            >
                <h3 className="vertical-timeline-element-title">{showedEvent.name}</h3>
                <h5 className="vertical-timeline-element-subtitle">Category: [{showedEvent.category}]</h5>
                <p>
                    {showedEvent.description}
                </p>
                <p>{showedEvent.id}</p>
                <button onClick={handleEditableState}>Edit</button>
                <button onClick={deleteEvent}>Delete</button>
            </VerticalTimelineElement >
            :
            <TimelineElementNew
                handleEvent={handleShowedEvent}
                initEvent={showedEvent}
            />
    )
}




export default TimelineElement;