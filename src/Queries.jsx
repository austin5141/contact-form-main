import React, {useState} from 'react'

export default function Queries(props) {

    return (
        <div className="formBox">
            <p className="queryheader">Query Type <strong>*</strong></p>
            <div className="queries">
                <label className={`radioText radioBox ${props.data.query == "General" ? "General" : "Not Selected"}`}>
                    <input 
                        type="radio" 
                        id="general" 
                        name="query" 
                        value="General" 
                        className="radioButton"
                        checked={props.data.query == "General"}
                        onChange={props.handleChange}
                    />
                    General Enquiry
                </label>
                
                <label className={`radioText radioBox ${props.data.query == "Support" ? "Support" : "Not Selected"}`}>
                    <input 
                        type="radio" 
                        id="support" 
                        name="query" 
                        value="Support" 
                        className="radioButton"
                        checked={props.data.query == "Support"}
                        onChange={props.handleChange}
                    />
                    Support Request
                </label>
            </div>
            {!props.submitted && props.data.query == "" ? <p className="errorMessage">{props.queryerror}</p> : null}
        </div>
    )
}