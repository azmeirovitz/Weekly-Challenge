import React from 'react';
import {reduxForm} from 'redux-form';
import Input from './input';
//import Textarea from '../general/form/textarea.js';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
//import {Link} from 'react-router-dom';
 

let Form = props => {
    console.log("props_login: ", props);

    // CheckIfPassMatches FUNCTION: 

const checkIfPassMatches = (formValues) => {
    console.log("student_login: ", formValues);

    const resp = axios.patch(`/api/student_info/${formValues.email}/${formValues.password}`)
            .then(function (resp) {
                console.log("resp.data: ", resp.data);
                const dbPassword = resp.data.checkPasswordMatch[0];
                const dbPassword1 = Object.values(dbPassword);
                const dbPassword2 = dbPassword1[0];

                            
                
                               
                
                
                if (dbPassword2 === resp.data.generated_hash_input_login) {
                    
                    console.log("resp.data.checkPasswordMatch: ", resp.data.checkPasswordMatch);
                    console.log("dbPassword2:", dbPassword2);
                    console.log("resp.data.generated_hash_input_login:", resp.data.generated_hash_input_login);
                    console.log("Input and db Passwords are matching");
                    //props.history.push('/student_response');


                    if (!formValues.teacher_code) {

                        console.log("Teacher's code was not entered, thus it's a student: ", formValues.teacher_code);
                        // Needs to continue to the password check below. Not anymore. Verify

                        props.history.push({
                            pathname: '/student_response',
                            state: formValues.email
                        })
    
    
                    } else if (formValues.teacher_code === "1Aa123") {
                        console.log("Teacher's code was entered: ", formValues.teacher_code);
                        props.history.push('/teacher_main_page')
                        return;
    
                    } else if (formValues.teacher_code && formValues.teacher_code !== "1Aa123") {
                        console.log("Teacher's code was entered, but inccorrectly: ", formValues.teacher_code);
                        alert("Your code is incorrect. If your are a student, keep this box empty.")
                        return;
                    }



                    // props.history.push({
                    //     pathname: '/student_response',
                    //     state: formValues.email
                    // })


                } else {
                    console.log("resp.data.checkPasswordMatch: ", resp.data.checkPasswordMatch);
                    console.log("dbPassword2:", dbPassword2);
                    console.log("resp.data.generated_hash_input_login:", resp.data.generated_hash_input_login);

                    console.log("Input and db Passwords are not matching");
                    alert("Your password does not match your email, or an account with this email does not exist. Try again.");
                    return;
                }
                
                

            })
            .catch(function (error) {
                console.log("error: ", error);
            })

            

                    
    // const resp = axios.get('http://localhost:3001/api/student_login', student_login)            

    //     .then(function (resp) {
    //         console.log("resp_login: ", resp);
            
    //         //props.replace("/the_challenge");

            

    //     })
    //     .catch(function (error) {
    //         console.log("error: ", error);
    //     });
        
        //return resp;
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
                    
                    // DECLARE FUNCTION: checkIfPassMatches()
                    checkIfPassMatches(formValues);
                    
                }

            })
            .catch(function (error) {
                console.log("error: ", error);
            })

        }

    const handleFormSubmit = (formValues) => {
        alert("Submit button of Login was clicked");
        //console.log("On submit simple form values: ", formValues);

        checkIfEmailExists(formValues);

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

// module.exports = {
//     email: formValues.email
// }

export default withRouter(reduxForm ({
    form: 'simple-form-login',  //A unique identifyer  //Can also be simpleForm
    //email:formValues.email
})(Form));

// export default reduxForm ({
//     form: 'simple-form-login',  //A unique identifyer
// })(Form)                //Can also be simpleForm