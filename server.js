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


app.post('/api/student_info', async (req, res, next) => {

console.log("req.body: ", req.body);


res.setHeader("access-control-allow-origin", "*"); // K's

    const {firstName, lastName, email, password } = req.body;

    const [results] = await db.execute(`INSERT INTO student_info (pid, firstName, lastName, email, password_hashed) VALUES (UUID(), ?, ?, ?, ?)`, [firstName, lastName, email, password]);

    const [studentData] = await db.query(`SELECT pid, firstName, lastName, email,  password_hashed AS password FROM student_info WHERE firstName = ? AND lastName = ? AND email = ? AND password_hashed`, [firstName, lastName, email, password]);

res.send({
    message: 'Inserting a new student works!',
    
    studentInfo: studentData,

    
});


});






app.listen(PORT, () => {
    console.log('The server is running at localhost' + PORT);
});
