import React from 'react';
import "./student_response.css";
import Form from "./form.js";
import {Link} from 'react-router-dom';


const StudentResponse = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">     

        <Link to="/" className="logOutButton">Back to Home Page</Link>

        <h1 className="h2">The Weekly Challenge - Student Response page</h1>
       
        <br></br>

        <h2 className="h2">Student Response Page</h2>
        
        </div> 

        <Form />

        <br></br>

    </main>

    <aside className="aside">
        <h3>Hi</h3>
         
    </aside>

    </div>
    
    </div>
);

}

export default StudentResponse;