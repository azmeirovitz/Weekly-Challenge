import React from 'react';
//import '../../contact/contact.scss';
import { Field } from 'redux-form';

       
const Input = (props) => {
    return (
        <div>
            

            <div >
                <label>Email</label>
                <br></br>  
                <Field 
                className="input-field-email"
                name="email" 
                component="input" 
                type="email" 
                placeholder="example@example.com" 
                autoComplete="email"
                pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required 
                    
                    />
            </div>
            <br></br>

        </div>

        );
    }

        export default Input;