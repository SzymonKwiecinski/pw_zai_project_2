import React, { useState } from "react";

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import { ReactComponent as PlusIcon } from '../plus.svg';

function TimelineElementNew(props) {
    const [timelineEvent, setEvent] = useState(props.initEvent);
    const [saveButton, setSaveButton] = useState((props.initEvent.name === "") ? false : true)
    const [prompt, setPrompt] = useState(!saveButton ? "Please provide all information" : "Form ready to Save :)");


    function handleSaveButton(state) {
        let flag = true
        for (const property in state) {

            if (property !== "id" && Boolean(state[property]) === false) {
                flag = false;
            }
        }
        if (flag) {
            setSaveButton(true)
            setPrompt("Form ready to Save :)")
        }
        else {
            setSaveButton(false)
            setPrompt("Please provide all information!!")
        }

    }

    function addNewEvent(event) {
        if (saveButton) {
            props.handleEvent(timelineEvent);
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
                    handleSaveButton(newState);
                    return newState
                }
                else if (newState.endDate >= newState.startDate) {
                    handleSaveButton(newState);
                    return newState
                }
                else {
                    handleSaveButton(newState);
                    return prevState
                }

            }
        );
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
            <form className="vertical-timeline-element-form" onSubmit={addNewEvent}>
                <div className="vertical-timeline-element-form-group">
                    <label>Title: </label>
                    <input className="vertical-timeline-element-form-input"
                        name="name"
                        value={timelineEvent.name && timelineEvent.name}
                        placeholder="Add Event Title"
                        onChange={handleSetEvent}
                    />
                </div>
                <div className="vertical-timeline-element-form-group">
                    <label className="vertical-timeline-element-form-label">Category: </label>
                    <select className="vertical-timeline-element-form-select" name="category" onChange={handleSetEvent} value={timelineEvent.category}>
                        <option value="Work">Work</option>
                        <option value="University">University</option>
                    </select>
                </div>
                <div className="vertical-timeline-element-form-group">
                    <label className="vertical-timeline-element-form-label">Description: </label>
                    <textarea
                        className="vertical-timeline-element-form-textarea"
                        name="description"
                        onChange={handleSetEvent}
                        value={timelineEvent.description && timelineEvent.description}
                        placeholder="Add desription"
                        rows={3}
                    />
                </div>
                <div className="vertical-timeline-element-form-group" >
                    <label className="vertical-timeline-element-form-label">StartDate:</label>
                    <input className="vertical-timeline-element-form-input" type="date" name="startDate" onChange={handleSetEvent} value={timelineEvent.startDate} />
                </div>
                <div className="vertical-timeline-element-form-group">
                    <label className="vertical-timeline-element-form-label">EndDate:</label>
                    <input className="vertical-timeline-element-form-input" type="date" name="endDate" onChange={handleSetEvent} value={timelineEvent.endDate} />
                </div>
                <p style={{ color: (saveButton === false) ? "#c84c17" : "#357834", fontWeight: "bold", background: "#dfdddd", borderRadius: "0.2rem" }}>{prompt}</p>
                <button className="vertical-timeline-element-button" disabled={!saveButton}>Save</button>
            </form>
        </VerticalTimelineElement>
    )
}




export default TimelineElementNew;