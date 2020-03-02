import React from 'react';
import './student_response.css';
import {Field, reduxForm} from 'redux-form';

const Textarea = (props) => {
    return (
        <div > 
            
            <Field 
                    className="input-textarea-student-solution"
                    name="message" 
                    component="textarea"
                    rows="10"
                    cols="50"                    
                    type="text" placeholder="Message"
                    pattern="[A-Za-z]{1,1000}"
                    required
                    
                    />
                
        </div>   
    )
}

export default Textarea;