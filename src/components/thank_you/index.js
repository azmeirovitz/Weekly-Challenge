import React from 'react';
import "./thank_you.css";
import {Link} from 'react-router-dom';


const ThankYou = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">      
        <h1 className="h2">The Weekly Challenge - Thank You page</h1>
       
        <br></br>

        <h2 className="h2">Thank You Page</h2>
        
        </div> 

        {/* This Link should validate the given info and if right, then go to The Challenge page. */}
        <Link to="/" className="logOutButton">Log Out</Link>

    </main>

    <aside className="aside">
        <h3>Hi</h3>
        {/* <img className="asideDots" src={home} alt="aside dots"/> */}
    </aside>

    </div>
    
    </div>
);

}

export default ThankYou;