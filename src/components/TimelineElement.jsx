import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimelineElementNew from "./TimelineElementForm";

import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as UniversityIcon } from '../university.svg';
function TimelineElement(props) {
    const [editableState, setEditableState] = useState(false)
    const [showedEvent, setShowedEvent] = useState(props.event)

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
        props.saveChangesForEvent(event)
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
                <div className="vertical-timeline-element-button-container" >
                    <button className="vertical-timeline-element-button" onClick={handleEditableState}>Edit</button>
                    <button className="vertical-timeline-element-button" onClick={deleteEvent}>Delete</button>
                </div>
            </VerticalTimelineElement >
            :
            <TimelineElementNew
                handleEvent={handleShowedEvent}
                initEvent={showedEvent}
            />
    )
}




export default TimelineElement;