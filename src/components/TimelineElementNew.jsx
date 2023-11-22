import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { ReactComponent as PlusIcon } from '../plus.svg';

function TimelineElementNew(props) {
    const [timelineEvent, setEvent] = useState({
        name: "",
        startDate: "",
        endDate: "",
        description: "",
        category: "Work"

    });

    function addNewEvent(event) {
        let flag = false
        for (const property in timelineEvent) {
            flag = Boolean(timelineEvent[property])
        }

        if (flag) {
            props.addNewEvent(timelineEvent);
        }
        else {
            alert("Empty event")
        }

        event.preventDefault();


    }

    function handleSetEvent(event) {
        const { value, name } = event.target;

        setEvent(
            (prevState) => {
                const newState = {
                    ...prevState,
                    [name]: value
                };

                if (name === "startDate" && prevState.endDate == '') {
                    return newState
                } else {
                    return newState.endDate >= newState.startDate ? newState : prevState
                }

            }
        )


    }


    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PlusIcon />}
        >
            <h3 className="vertical-timeline-element-title">Add new event</h3>
            <form onSubmit={addNewEvent}>
                <div>
                    <label>Title: </label>
                    <input className="vertical-timeline-element-title"
                        name="name"
                        value={timelineEvent.name && timelineEvent.name}
                        placeholder="Add Event Title"
                        onChange={handleSetEvent}
                    />
                </div>
                <div>
                    <label>Category: </label>
                    <select name="category" onChange={handleSetEvent} value={timelineEvent.category}>
                        <option value="Work">Work</option>
                        <option value="University">University</option>
                    </select>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea
                        name="description"
                        onChange={handleSetEvent}
                        value={timelineEvent.description && timelineEvent.description}
                        placeholder="Add desription"
                        rows={3}
                    />
                </div>
                <div>
                    <label>StartDate:</label>
                    <input type="date" name="startDate" onChange={handleSetEvent} value={timelineEvent.startDate} />
                </div>
                <div>
                    <label>EndDate:</label>
                    <input type="date" name="endDate" onChange={handleSetEvent} value={timelineEvent.endDate} />
                </div>
                <button>Save</button>
            </form>
        </VerticalTimelineElement>
    )
}




export default TimelineElementNew;