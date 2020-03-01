import React from 'react';
import "./forgot-your-password.css";
import Form from "./form-forgot-your-password";
import {Link} from 'react-router-dom';



const ForgotYourPassword = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">      
        <h1 className="h2">The Weekly Challenge - Forgot Your Password page</h1>
       
        <br></br>

        <h2 className="h2">Forgot Your Password Page</h2>
        
        </div>
        

    </main>

    <aside className="aside">
        <h3>Hi</h3>

        <Form />

        
    </aside>
 
    <br></br>

    </div>

    {/* <Link {{x} === 1 ? to="/the_challenge" : alert("You have to submit your information before moving on.") }className="submitButton">Continue to the Challenge page</Link> */}

    {/* <Link to="/the_challenge" className="submitButton">Continue to the Challenge page</Link> */}
    </div>
);

}
 
export default ForgotYourPassword;