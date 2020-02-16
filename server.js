const db = require('./db');
const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express();


app.use(express.json());



///THE CODE WITH DB.QUERY OR EXECUTE:

app.options("*", async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-headers", "*");
    res.send();
}) // K's

// Also can have module.exports = app.post(...)
app.post('/api/student_info', async (req, res, next) => {

//console.log("req.body: ", req.body);

res.setHeader("access-control-allow-origin", "*"); // K's

    let errors = [];

    const {firstName, lastName, email, password } = req.body;

    let crypto = require('crypto');
    let hash = crypto.createHash('sha256');
    let hash_update = hash.update(password, 'utf8');
    let generated_hash = hash_update.digest('hex');

    console.log("generated_hash: ", generated_hash);

    try {

    const [checkEmailExists] = await db.execute(`SELECT email FROM student_info WHERE email = ?` , [email]);

    console.log("checkEmailExists:", checkEmailExists);

    if (checkEmailExists.length === 0) {

    const [results] = await db.execute(`INSERT INTO student_info (pid, firstName, lastName, email, password_hashed) VALUES (UUID(), ?, ?, ?, ?)`, [firstName, lastName, email, generated_hash]);

    // const [studentData] = await db.query(`SELECT pid, firstName, lastName, email,  password_hashed AS password FROM student_info WHERE firstName = ? AND lastName = ? AND email = ? AND password_hashed`, [firstName, lastName, email, password]);

res.send({
    message: 'Inserting a new student works!',
    //resultsInserted: results,
    //studentInfo: studentData,    
});

} else {

    console.log("An account with this email already exists.");

    errors.push(`An account with this email: ${email} already exists. Please try again or use a different email address.`);


            res.status(400).send({
                code: 400,
                errors: errors,
                message: "Bad Post Request"
                });

            return;


}

}

catch (error) {
        
    next(error);
}

});






app.listen(PORT, () => {
    console.log('The server is running at localhost' + PORT);
});
