import React from 'react';
import {reduxForm} from 'redux-form';
import { Field } from 'redux-form';
import {Link, withRouter} from 'react-router-dom';
//import {Link} from 'react-router-dom';
 

let Form = props => {
    console.log("props_teacher_main_page: ", props);


    

    const checkOptions = (formValues) => {
    console.log("teacher_main_page choice: ", formValues);               
            
        if (formValues.activity === "change_weekly_challenge") {
            console.log("IF condition of teacher's choice change_weekly_challenge");
            props.history.push("./teacher_change_challenge");

        }

        if (formValues.activity === "get_students_list") {
            console.log("IF condition of teacher's choice get_students_list");
            props.history.push("./teacher_get_student_list");

        }
                    
    
    }


    
    const handleFormSubmit = (formValues) => {
        alert("Submit button of Teacher Main Page was clicked");
        //console.log("On submit simple form values: ", formValues);

        checkOptions(formValues);

    }

     

    const {handleSubmit} = props 

    return (

        <div> 
            <br></br>
            <h5 className="h5">Please enter the following infirmation</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
            {/* <Input /> */}

            <div>
                <label>Please choose one of the following options:</label>
                <div>
                    <label><Field name="activity" component="input" type="radio" value="change_weekly_challenge"/>Change Weekly Challenge</label>
                    <label><Field name="activity" component="input" type="radio" value="get_students_list"/>Get Students' List</label>
                </div>
            </div>
            
            <br></br>              

                <div >
                    <button className="form-actions" type="submit">Submit Your Choice</button> 
                </div> 



            </form>

        </div>
    )
}

// module.exports = {
//     email: formValues.email
// }

export default withRouter(reduxForm ({
    form: 'simple-form-teacher-main-page',  //A unique identifyer  //Can also be simpleForm
    //email:formValues.email
})(Form));