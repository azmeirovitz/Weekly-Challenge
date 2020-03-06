// ORIGINAL BASIC CODE AS A STARTER
// import React from 'react';
// import '../assets/css/app.scss';
// import logo from '../assets/images/logo.svg';

// const App = () => (
//     <div>
//         <div className="app">
//             <img src={logo} className="logo rotate"/>
//             <h1>Welcome To React</h1>
//         </div>
//     </div>
// );

// export default App;


import React from 'react';
import {Route} from "react-router-dom";
//import '../assets/css/app.css';

import Home from "./home";
import Login from "./login";
import SignUp from "./sign_up";
import TheChallenge from "./the_challenge";
import StudentResponse from "./student_response";
import ThankYou from "./thank_you";
import ForgotYourPassword from "./forgot-your-password";
import TeacherMainPage from './teacher_main_page';
import TeacherChangeChallenge from './teacher_change_challenge';
import TeacherGetStudentList from './teacher_get_student_list';


////// <Link> is good for buttons/visuals
///// this.props.history.push   is for switching pages in the code. For example: if ..... then switch to page x.

const App = () => (

    <div className="app">
        <div className="container">
            {/* <Header /> */}

            <Route path="/the_challenge" component={TheChallenge} />
            <Route path="/student_response" component={StudentResponse} />
            <Route path="/" exact component={Home} />
            <Route path="/thank_you" component={ThankYou} />

            <Route path="/login" exact component={Login} />
            <Route path="/sign_up" exact component={SignUp} />
            <Route path="/forgot-your-password" exact component={ForgotYourPassword} />

            <Route path="/teacher_main_page" exact component={TeacherMainPage} />
            <Route path="/teacher_change_challenge" exact component={TeacherChangeChallenge} />
            <Route path="/teacher_get_student_list" exact component={TeacherGetStudentList} />
            

            
        </div>

    </div>

);




export default App;