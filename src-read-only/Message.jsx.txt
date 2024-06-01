import React, {useState} from 'react'

export default function Messsage(props) {

    return (
        <div className="message formBox">
            <p className="messageheader">Message <strong>*</strong></p>
            <textarea value={props.data.message} name="message" onChange={props.handleChange} className={`${!props.submitted && props.data.message == "" ? "Error" : null}`}></textarea>
            {!props.submitted && props.data.message == "" ? <p className="errorMessage">{props.error}</p> : null}
        </div>
    )
}