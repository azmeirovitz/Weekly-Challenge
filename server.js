const db = require('./db');
const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express();


app.use(express.json());





///THE CODE WITH DB.QUERY OR EXECUTE:



app.listen(PORT, () => {
    console.log('The server is running at localhost' + PORT);
});
