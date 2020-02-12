import React from 'react';
import {reduxForm} from 'redux-form';
import Textarea from './textarea';
//import Input from './input';
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
            <h5 className="h5">Please enter your response</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
            <Textarea />
            
            <br></br>              

                <div >
                    <button className="form-actions" type="submit">Submit your response</button> 
                </div> 


            </form>

        </div>
    )
}

export default reduxForm ({
    form: 'simple-form',  //A unique identifyer
})(Form)                //Can also be simpleForm