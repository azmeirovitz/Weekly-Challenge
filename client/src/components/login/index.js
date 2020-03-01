import React from 'react';
import "./login.css";
import Form from "./login_form/form";
import {Link} from 'react-router-dom';


const Login = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">      
        <h1 className="h2">The Weekly Challenge - Login page</h1>
       
        <br></br>

        <h2 className="h2">Login Page</h2>
        
        </div>
        

    </main>

    <aside className="aside">
        <h3>Hi</h3>

        <Form />

        
    </aside>

    <br></br>
    </div>

    <Link to="/forgot-your-password" className="submitButton">Forgot Your Password</Link>

    {/* <Link to="/the_challenge" className="submitButton">Continue to the Challenge page</Link> */}
    
    </div>
);

}

export default Login;
