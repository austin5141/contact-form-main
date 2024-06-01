import React, {useState} from 'react'

export default function TextFields(props) {

    return (
        <>
            <div className={"name formBox"}>
                <div className="firstName">
                    <label htmlFor="firstname">First Name <strong>*</strong></label>
                    <input 
                        type="text" 
                        id="firstname" 
                        name="firstName" 
                        className={`nameBox ${!props.submitted && props.data.firstName == "" ? "Error" : null}`}
                        value={props.data.firstName}
                        onChange={props.handleChange}
                    />
                    {!props.submitted && props.data.firstName == "" ? <p className="errorMessage">{props.error}</p> : null}
                </div>
                <div className="lastName">
                    <label htmlFor="lastname">Last Name <strong>*</strong></label>
                    <input 
                        type="text" 
                        id="lastname" 
                        name="lastName" 
                        className={`nameBox ${!props.submitted && props.data.lastName == "" ? "Error" : null}`}
                        value={props.data.lastName}
                        onChange={props.handleChange}
                    />
                    {!props.submitted && props.data.lastName == "" ? <p className="errorMessage">{props.error}</p> : null}
                </div>
            </div>
            <div className="email formBox">
                <label>Email Address <strong>*</strong>
                    <input 
                        type="email" 
                        className={`emailInput ${!props.domains.some(domain => props.data.email.endsWith(domain)) || !props.data.email.includes("@") ? "Error" : null}`}
                        name="email"
                        value={props.data.email}
                        onChange={props.handleChange}
                    />
                    {!props.submitted && !props.domains.some(domain => props.data.email.endsWith(domain)) || !props.data.email.includes("@") ? <p className="errorMessage">{props.emailerror}</p> : null}
                </label>
            </div>
        </>
    )
}