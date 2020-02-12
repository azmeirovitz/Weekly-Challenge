import React from 'react';
import "./sign_up.css";
import Form from "./sign_up_form/form";
import {Link} from 'react-router-dom';


const SignUp = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">      
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
    <Link to="/the_challenge" className="submitButton">Continue to the Challenge page</Link>
    </div>
);

}

export default SignUp;