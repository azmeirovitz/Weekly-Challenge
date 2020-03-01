import React from 'react';
import {reduxForm} from 'redux-form';
import Input from './input';
//import Textarea from '../general/form/textarea.js';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

// const axiosInstance = axios.create({
//     baseURL: "https://localhost:3001/api"
// });

//const axios = require('axios'); // Only for GET?

let Form = props => {

    console.log("props_sign_up: ", props);

// CREATE FUNCTION:       
const create = (student) => {
    console.log("student: ", student);

                    
    const resp = axios.post("http://localhost:3001/api/student_info", student)            

        .then(function (resp) {
            console.log("resp: ", resp);
            
            props.history.push('/the_challenge');            

        })
        .catch(function (error) {
            console.log("error: ", error);
        });
        
        //return resp;
    }
    
    
    const checkIfEmailExists = (formValues) => {
        const resp = axios.patch(`/api/student_info/${formValues.email}`)
            .then(function (resp) {
                console.log("resp.data: ", resp.data);
                
                if (resp.data.checkEmailExists.length === 0) {
                    
                    create (formValues);
                    

                } else {
                    
                    alert("This email has an account already, try a different email");
                    return;
                    
                }

            })
            .catch(function (error) {
                console.log("error: ", error);
            })

        }

    const handleFormSubmit = (formValues) => {
        alert("Submit button was clicked");
        //console.log("On submit simple form values: ", formValues);
        
        

        if (formValues.password === formValues.re_password) {
            console.log("---");
            checkIfEmailExists(formValues);
        } else {
            alert("Your re-entered password should be exactly the same as your password.")

            return;
        }  
        
                       
    }

    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    


    const {handleSubmit} = props;
    
    
    return (
        <div>
            <br></br>
            <h5 className="h5">Please enter the following infirmation</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
            <Input />
            
            <br></br>              

            <div >
                <button className="form-actions" type="submit">      Submit your information</button>                
            </div>
            <br></br>
                      
            {/* <Link to="/the_challenge" className="submitButton">Continue to the Challenge page</Link> */}

            
            </form>

        </div>
    )
}

export default withRouter(reduxForm ({
    form: 'simple-form',  //A unique identifyer  //Can also be simpleForm
    
})(Form));