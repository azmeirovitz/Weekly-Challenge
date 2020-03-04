import React from 'react';
import "./sign_up.css";
import Form from "./sign_up_form/form";
import {Link} from 'react-router-dom';
import {x} from "./sign_up_form/form";


const SignUp = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">  

        <Link to="/" className="logOutButton">Back to Home Page</Link>

        <h1 className="h2">The Weekly Challenge - SignUp page</h1>
       
        <br></br>

        <h2 className="h2">SignUp Page</h2>
        
        </div>
        

    </main>

    <aside className="aside">
        <h3>Hi</h3>

        <Form />

        
    </aside>
 
    <br></br>

    </div>

    {/* <Link {{x} === 1 ? to="/the_challenge" : alert("You have to submit your information before moving on.") }className="submitButton">Continue to the Challenge page</Link> */}

    {/* <Link to="/forgot-your-password" className="submitButton">Forgot Your Password</Link> */}
    </div>
);

}
 
export default SignUp;