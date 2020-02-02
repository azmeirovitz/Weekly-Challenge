import React from 'react';
import "./login.css";
import {Link} from 'react-router-dom';
//import home from "../../assets/images/dots-box2.png";

//import home1 from "../../assets/images/cupcakes.png";

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

        {/* This Link should validate the given info and if right, then go to The Challenge page. */}
        <Link to="/the_challenge" className="submitButton">Submit Your Info</Link>

    </main>

    <aside className="aside">
        <h3>Hi to Aside Div</h3>
        {/* <img className="asideDots" src={home} alt="aside dots"/> */}
    </aside>

    </div>
    
    </div>
);

}

export default Login;