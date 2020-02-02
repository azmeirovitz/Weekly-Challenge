import React from 'react';
import "./sign_up.css";


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

        

        <button type="submit">SignUp</button>

    </main>

    <aside className="aside">
        <h3>Hi</h3>
        {/* <img className="asideDots" src={home} alt="aside dots"/> */}
    </aside>

    </div>
    
    </div>
);

}

export default SignUp;