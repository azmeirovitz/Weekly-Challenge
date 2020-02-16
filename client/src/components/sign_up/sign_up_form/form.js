import React from 'react';
import {reduxForm} from 'redux-form';
import Input from './input';
//import Textarea from '../general/form/textarea.js';
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: "https://localhost:3001/api"
// });

//const axios = require('axios'); // Only for GET?

let Form = props => {

    const handleFormSubmit = (formValues) => {
        alert("Submit button was clicked"),
        console.log("On submit simple form values: ", formValues);
        //console.log("formValues.firstName: ", formValues.firstName);

        if (formValues.password === formValues.re_password) {

        } else {
            alert("Your re-entered password should be exactly as your password.")

            return;
        }

        
        const create = (student) => {

            console.log("student: ", student);

                        
            const resp = axios.post("http://localhost:3001/api/student_info", student)
            

            ///const resp = axios.post('/api/student_info', student) //How does it know to go to http//localhost:3000? How do I create an endpoint?

            .then(function (resp) {
                console.log("resp: ", resp);
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
            
            //return resp;
        }

        create (formValues);        
        //const studentPost = create(formValues);
        //const studentPost = await props.create(formValues);

        
    }

    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    


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
                    <button className="form-actions" type="submit">Submit your information</button> 
                </div> 


            </form>

        </div>
    )
}

export default reduxForm ({
    form: 'simple-form',  //A unique identifyer
})(Form)                //Can also be simpleForm