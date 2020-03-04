import React from 'react';
import {reduxForm} from 'redux-form';
import Textarea from './textarea';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import Input from './input';

let theChallenge = "Tee Shirts sell for $15 each and striped shirts for $22 each. A total of 62 shirts are sold, and the total value of the shirts is $1098. How many of each kind of shirt were sold?" 

let Form = props => {

    const insertStudentResponse = (studentResponse, theChallenge, email) => {
        console.log("studentResponseText: ", studentResponse);

console.log("email from login as location.state: ", email); 
console.log("the challenge: ", theChallenge);

theChallenge = encodeURI(theChallenge);
email = encodeURI(email);
    
                        
const resp = axios.post(`http://localhost:3001/api/student_info/the_weekly_challenge?theChallenge=${theChallenge}&email=${email}`, studentResponse)      

            .then(function (resp) {
                console.log("resp of student response post: ", resp);
                console.log("resp.data.studentResponse:", resp.data.studentResponse); // Why is this undefined? Because I did not send it.
                console.log("theChallenge:: ", theChallenge);
                
                props.history.push('/thank_you');            
    
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
            
        }

        const checkIfEmailExists = (formValues, loginEmail) => {
            const resp = axios.patch(`/api/student_info/${loginEmail}`)
                .then(function (resp) {
                    console.log("resp.data: ", resp.data);
                    
                    if (resp.data.checkEmailInResponsesTable.length > 0) {

                        alert("You have already submitted a response for this challenge.");
                        return;

                    } else {                    
                        
                        insertStudentResponse(formValues, theChallenge, loginEmail);
                        
                    }
    
                })
                .catch(function (error) {
                    console.log("error: ", error);
                })
    
            }




    const handleFormSubmit = (formValues) => {
        alert("Student response submitted clicked"),
        console.log("student response input: ", formValues);
        
        checkIfEmailExists(formValues, props.location.state);
        
        //insertStudentResponse(formValues, theChallenge, props.location.state);

    }

    console.log("email from Login page: ", props.location.state);

    const {handleSubmit} = props 

    return (
        <div>
            <br></br>

            <h3>{theChallenge}</h3>
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

export default withRouter(reduxForm ({
    form: 'simple-form-student-response',  //A unique identifyer  //Can also be simpleForm
    
})(Form));
