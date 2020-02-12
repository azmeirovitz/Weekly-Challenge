import React from 'react';
import {reduxForm} from 'redux-form';
import Input from './input';
//import Textarea from '../general/form/textarea.js';
 

let Form = props => {

    const handleFormSubmit = (formValues) => {
        alert("submitted"),
        console.log("On submit simple form values: ", formValues);
    }

    const {handleSubmit} = props 

    return (
        <div>
            <br></br>
            <h5 className="h5">Please enter the following infirmation</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
            <Input />
            
            <br></br>              

                <div >
                    <button className="form-actions" type="submit">Login</button> 
                </div> 


            </form>

        </div>
    )
}

export default reduxForm ({
    form: 'simple-form-login',  //A unique identifyer
})(Form)                //Can also be simpleForm