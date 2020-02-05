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

// import ProductDetails from "./products/product_details";
// import Cart from './cart';
// import GuestCheckout from "./checkout/guest_checkout";
// import GuestOrderDetails from './orders/guest_order_details';

// import "./app.scss";


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


            {/* <Route path="/products/:product_id" component={ProductDetails} />

            <Route path="/checkout/guest" component={GuestCheckout} />

            <Route path="/orders/guest/:order_id" component={GuestOrderDetails} /> */}

            

            {/* <Footer /> */}
        </div>

    </div>

);




export default App;