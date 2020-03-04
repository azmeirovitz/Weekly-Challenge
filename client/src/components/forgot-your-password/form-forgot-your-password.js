import React from 'react';
import {reduxForm} from 'redux-form';
import Input from './input-forgot-your-password';
//import Textarea from '../general/form/textarea.js';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
//import {Link} from 'react-router-dom';
 

let Form = props => {
    console.log("props_login: ", props);


const renewPassword = (formValues) => {
    console.log("student_login: ", formValues);
    let switchVar = 1;

    const resp = axios.patch(`/api/student_info/${formValues.email}/${formValues.password}/${switchVar}`)
            .then(function (resp) {
                console.log("resp.data of re-new password: ", resp.data);
                //props.history.push('/student_response');
                props.history.push({
                    pathname: '/student_response',
                    state: formValues.email
                })
                        
                

            })
            .catch(function (error) {
                console.log("error: ", error);
            })   

    
    }


    const checkIfEmailExists = (formValues) => {
        const resp = axios.patch(`/api/student_info/${formValues.email}`)
            .then(function (resp) {
                console.log("resp.data: ", resp.data);
                
                if (resp.data.checkEmailExists.length === 0) {
                    
                    alert("An acount with this email does not exist.");
                    return;
                    //Verify the return here is fine                    
                                        
                } else {                    
                    
                    renewPassword(formValues);
                    
                }

            })
            .catch(function (error) {
                console.log("error: ", error);
            })

        }

    const handleFormSubmit = (formValues) => {
        alert("Submit button of Re-New Password was clicked");
        //console.log("On submit simple form values: ", formValues);

        if (formValues.password === formValues.re_password) {
            //console.log("---");
            checkIfEmailExists(formValues);
        } else {
            alert("Your re-entered password should be exactly the same as your password.")

            return;
        }  

        
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
                    <button className="form-actions" type="submit">Submit Re-New Password</button> 
                </div> 


            </form>

        </div>
    )
}

export default withRouter(reduxForm ({
    form: 'simple-form-forgot-your-password',  //A unique identifyer  //Can also be simpleForm
    
})(Form));