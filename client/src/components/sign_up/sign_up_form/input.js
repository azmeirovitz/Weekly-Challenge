import React from 'react';
//import '../../contact/contact.scss';
import { Field } from 'redux-form';

       
const Input = (props) => {
    return (
        <div>
            <div>
                <label>First name</label>
                <br></br>
                <Field 
                className="input-field-name"
                name="firstName" 
                component="input" 
                type="name" 
                placeholder="First-Name" 
                //pattern="([A-Za-z ]+) ([A-Za-z ]+)"
                pattern="[A-Z][a-zA-Z]*"
                //pattern="[A-Za-z ]"
                required
                />

            </div>
            <br></br>

            <div>
                <label>Last name</label>
                <br></br>
                <Field 
                className="input-field-name"
                name="lastName" 
                component="input" 
                type="name" 
                placeholder="Last-Name" 
                //pattern="([A-Za-z ]+) ([A-Za-z ]+)"
                pattern="[a-zA-z]+([ '-][a-zA-Z]+)*"
                //pattern="[A-Za-z ]"
                required
                />

            </div>
            <br></br>

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
            
            <div >
                <label>Password</label>
                <br></br>           
                <Field 
                className="input-field-password"
                name="password" 
                component="input" 
                type="password" 
                placeholder="Example: 1Sv23$%789"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters"
                required 
                    />
            </div>
            <br></br>

            <div >
                <label>Re-enter your password</label>
                <br></br>
                <Field 
                className="input-field-password"
                name="re_password" 
                component="input" 
                type="password" 
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must follow the password rules"
                required
                />
            </div>
            <br></br>
            <br></br>

            <div >
                <label>Teacher's Code</label>
                <br></br>           
                <Field 
                className="input-teacher-code"
                name="teacher_code" 
                component="input" 
                type="password" 
                placeholder=""
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
                title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters"
                // required 
                    />
            </div>
            <br></br>

        </div>
    );

    }

    export default Input;