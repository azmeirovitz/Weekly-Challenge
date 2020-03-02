import React from 'react';
import "./the_challenge.css";
import {Link} from 'react-router-dom';


let theChallenge = "Tee Shirts sell for $15 each and striped shirts for $22 each. A total of 62 shirts are sold, and the total value of the shirts is $1098. How many of each kind of shirt were sold?"

const TheChallenge = (props) => {

    // const insertTheChallenge = (theChallenge) => {
    //     console.log("theChallenge: ", theChallenge);
    
                        
    //     const resp = axios.post("http://localhost:3001/api/student_info/the_challenge", theChallenge)            
    
    //         .then(function (resp) {
    //             console.log("resp of student response post: ", resp);
    //             console.log("resp.data.theChallenge:", resp.data.theChallenge);
                
    //             //props.history.push('/thank_you');            
    
    //         })
    //         .catch(function (error) {
    //             console.log("error: ", error);
    //         });
            
    //         //return resp;
    //     }

    //     insertTheChallenge(theChallenge);
    



    return (
<div className="theContainer">
    <div className="loginContainer">
    <main className="main">  
        <div className="paragraphs">      
        <h1 className="h2">The Weekly Challenge - The Challenge page</h1>
       
        <br></br>

        <h2 className="h2">The Challenge:</h2>
        <h3>{challenge}</h3>
        
        </div> 

        {/* This Link should validate the given info and if right, then go to The Challenge page. */}
        <Link to="/student_response" className="submitButton">Click here to enter your solution</Link>

    </main>

    <aside className="aside">
        <h3>Hi</h3>
        {/* <img className="asideDots" src={home} alt="aside dots"/> */}
    </aside>

    </div>
    
    </div>
);

}

export default TheChallenge;