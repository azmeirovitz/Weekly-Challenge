import React from 'react';
import './student_response.css';
import {Field, reduxForm} from 'redux-form';

const Textarea = (props) => {
    return (
        <div > 
            
            <Field 
                    className="input-field-message"
                    name="message" 
                    component="textarea"
                    rows="3"
                    cols="10"                    
                    type="text" placeholder="Message"
                    pattern="[A-Za-z]{1,1000}"
                    required
                    
                    />
                
        </div>   
    )
}

export default Textarea;