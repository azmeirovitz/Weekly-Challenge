import React from 'react';
import {reduxForm} from 'redux-form';
import Textarea from './textarea';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
//import {email} from '../login/login_form/form';
import Input from './input';

let theChallenge = "Tee Shirts sell for $15 each and striped shirts for $22 each. A total of 62 shirts are sold, and the total value of the shirts is $1098. How many of each kind of shirt were sold?" 

//let theChallengeNumber = 1;

let Form = props => {

    //console.log("email from login_form file to student_response file ::", email);

    const insertStudentResponse = (studentResponse, theChallenge) => {
        console.log("studentResponseText: ", studentResponse);
    
                        
        const resp = axios.post(`http://localhost:3001/api/student_info/the_weekly_challenge/${theChallenge}`, studentResponse)            
    
            .then(function (resp) {
                console.log("resp of student response post: ", resp);
                console.log("resp.data.studentResponse:", resp.data.studentResponse);
                console.log("theChallenge:: ", theChallenge);
                
                props.history.push('/thank_you');            
    
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
            
        }

        const checkIfEmailExists = (formValues) => {
            const resp = axios.patch(`/api/student_info/${formValues.email}`)
                .then(function (resp) {
                    console.log("resp.data: ", resp.data);
                    
                    if (resp.data.checkEmailExists.length === 0) {
                        
                        alert("An acount with this email does not exist.");
                        return;
                                                                    
                    } else if (resp.data.checkEmailInResponsesTable.length > 0) {

                        alert("You have already submitted a response for this challenge.");
                        return;

                    } else {                    
                        
                        insertStudentResponse(formValues, theChallenge);
                        
                    }
    
                })
                .catch(function (error) {
                    console.log("error: ", error);
                })
    
            }




    const handleFormSubmit = (formValues) => {
        alert("Student response submitted clicked"),
        console.log("student response input: ", formValues);
        
        checkIfEmailExists(formValues);        

    }


    const {handleSubmit} = props 

    return (
        <div>
            <br></br>

            <h3>{theChallenge}</h3>
            <br></br>

            <h5 className="h5">Please enter your response</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>

            <Input />
            
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

// export default reduxForm ({
//     form: 'simple-form',  //A unique identifyer
// })(Form)                //Can also be simpleForm