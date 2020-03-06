import React from 'react';
//import "./teacher_main_page.css";
//import Form from "./teacher_main_page/form";
//import Form from "./form";
import {Link} from 'react-router-dom';


const TeacherGetStudentList = (props) => {
    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">    

        <Link to="/" className="logOutButton">Back to Home Page</Link>

        <h1 className="h2">The Weekly Challenge - Teacher Get Student List Page</h1>
       
        <br></br>

        <h2 className="h2">Teacher Get Student List Page</h2>
        
        </div>
        

    </main>

    <aside className="aside">
        <h3>Hi</h3>

        {/* <Form /> */}

        
    </aside>

    <br></br>
    </div>

        
    </div>
);

}

export default TeacherGetStudentList;