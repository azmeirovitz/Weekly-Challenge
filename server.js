const db = require('./db');
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());


app.options("*", async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-headers", "*");
    res.send();
}) // K's

///PATCH FOR SIGN UP AND LOGIN:

app.patch('/api/student_info/:sign_up_email', async (req, res, next) => {
    
    res.setHeader("access-control-allow-origin", "*");
    
    const {sign_up_email} = req.params;
    console.log("req.params sign_up_email: ", sign_up_email);

    const [checkEmailExists] = await db.execute(`SELECT email FROM student_info WHERE email = ?` , [sign_up_email]);

    const [checkEmailInResponsesTable] = await db.execute(`SELECT student_email FROM the_weekly_challenge WHERE student_email = ?` , [sign_up_email]);

    res.send({
        //message: '',
        checkEmailExists: checkEmailExists,
        checkEmailInResponsesTable: checkEmailInResponsesTable

    });


});

//POST FOR SIGN UP:

// Also can have module.exports = app.post(...)
app.post('/api/student_info', async (req, res, next) => {

res.setHeader("access-control-allow-origin", "*"); // K's

    let errors = [];

    const {firstName, lastName, email, password } = req.body;

    
    try {

    // const [checkEmailExists] = await db.execute(`SELECT email FROM student_info WHERE email = ?` , [email]);

    // console.log("checkEmailExists:", checkEmailExists);

    // if (checkEmailExists.length === 0) {

    let crypto = require('crypto');
    let hash = crypto.createHash('sha256');
    let hash_update = hash.update(password, 'utf8');
    let generated_hash = hash_update.digest('hex');
    
    console.log("generated_hash: ", generated_hash);


    const [results] = await db.execute(`INSERT INTO student_info (pid, firstName, lastName, email, password_hashed) VALUES (UUID(), ?, ?, ?, ?)`, [firstName, lastName, email, generated_hash]);

    
res.send({
    message: 'Inserting a new student works!',
     
});

}

catch (error) {
        
    next(error);
}

});

///THE CODE FOR LOGIN:

app.patch('/api/student_info/:sign_up_email/:sign_up_password', async (req, res, next) => {
    
    res.setHeader("access-control-allow-origin", "*");
    
    const {sign_up_password} = req.params;
    const {sign_up_email} = req.params;
    console.log("req.params sign_up_password and email: ", sign_up_password, sign_up_email);



    const [checkPasswordMatch] = await db.execute(`SELECT password_hashed FROM student_info WHERE email = ?` , [sign_up_email]);

    let crypto = require('crypto');
    let hash = crypto.createHash('sha256');
    let hash_update = hash.update(sign_up_password, 'utf8');
    let generated_hash = hash_update.digest('hex');
    
    console.log("generated_hash: ", generated_hash);

    res.send({
        //message: '',
        checkPasswordMatch: checkPasswordMatch,
        generated_hash_input_login: generated_hash

    });


});

///THE CODE FOR Forgot-Your-Password:

app.patch('/api/student_info/:sign_up_email/:sign_up_password/:switchVar', async (req, res, next) => {
    
    res.setHeader("access-control-allow-origin", "*");
    
    const {sign_up_password} = req.params;
    const {sign_up_email} = req.params;
    const {switchVar} = req.params;
    console.log("req.params sign_up_password and email and switchVar: ", sign_up_password, sign_up_email, switchVar);

    

    //const [checkPasswordMatch] = await db.execute(`SELECT password_hashed FROM student_info WHERE email = ?` , [sign_up_email]);

    let crypto = require('crypto');
    let hash = crypto.createHash('sha256');
    let hash_update = hash.update(sign_up_password, 'utf8');
    let generated_hash = hash_update.digest('hex');
    
    console.log("generated_hash: ", generated_hash);


    const [updateRePassword] = await db.execute(`UPDATE student_info SET password_hashed=? WHERE email = ?` , [generated_hash, sign_up_email]);

    const [renewedPassword] = await db.execute(`SELECT password_hashed FROM student_info WHERE email = ?` , [sign_up_email]);

    
    res.send({
        //message: '',
        renewedPassword: renewedPassword
        
    });


});

// STUDENT RESPONSE INSERT

app.post('/api/student_info/the_weekly_challenge', async (req, res, next) => {

    res.setHeader("access-control-allow-origin", "*"); // K's
    
        let errors = [];

        const {theChallenge, email} = req.query;
        //console.log("req.params theChallenge:", req.params);
        console.log("theChallenge from the req.params:", theChallenge);
        console.log("email from req.query:", email);
    
        const { message } = req.body;
        //const {message, }

        //console.log("req.body:", req.body);
        console.log("studentResponse", message);

    
        
        try {

        // /// In general, can insert the challenge question into a separate table, so each challenge has an id and a pid. Then, when inserting the below part, can use the pid form this challenges table, thus, store in teh below table only the pid of the challenge and not the challenge itself. Not sure it makes any difference in the application.

        const [results] = await db.execute(`INSERT INTO the_weekly_challenge (pid, student_email, the_challenge, studentResponse) VALUES (UUID(), ?, ?, ?)`, [email, theChallenge, message]);  
            
        
    
        
    res.send({
        message: 'Inserting a new studentResponse works!',
        email: email,
        studentResponse: message
         
    });
    
    }
    
    catch (error) {
            
        next(error);
    }
    
    });






app.listen(PORT, () => {
    console.log('The server is running at localhost' + PORT);
});
