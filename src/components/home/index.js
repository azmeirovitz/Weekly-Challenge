import React from 'react';
import "./home.css";
import {Link} from 'react-router-dom';

//import home from "../../assets/images/dots-box2.png";
//import home1 from "../../assets/images/cupcakes.png";

const Home = (props) => {
    return (
<div className="theContainer">
    <div className="homeContainer">
    <main className="main">  
        <div className="paragraphs">      
        <h1 className="h2">The Weekly Challenge</h1>
       
        <br></br>

        <h2 className="h2">Home Page</h2>
        
        </div>

        {/* <button type="button">Sign Up</button>
        <button type="button">Login</button> */}

        <Link to="/login" className="buttonsDesign">Login</Link>

        <Link to="/sign_up" className="buttonsDesign">Sign Up</Link>

    </main>

    <aside className="aside">
        <h3>Hi to Aside Div</h3>
        {/* <img className="asideDots" src={home} alt="aside dots"/> */}
    </aside>

    </div>
    
    </div>
);

}

export default Home;