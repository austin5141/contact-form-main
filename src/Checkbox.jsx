import React, {useState} from 'react'

export default function Checkbox(props) {

    return (
        <div className="formBox">
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    name="consent"
                    id="consent"
                    checked={props.data.checkbox}
                    onChange={props.handleCheckbox}
                />
                <span>I consent to being contacted by the team <strong>*</strong></span>
            </label>
            {!props.submitted && props.data.checkbox == false ? <p className="errorMessage">{props.checkerror}</p> : null}
        </div>
    )
}