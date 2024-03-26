const clientData = require('./data.json');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//The first route
app.get('/projects', (req, res) => {
    try {
        res.send(clientData);
    } catch (error) {
        console.log(error);
    }
})

//Create a new project
app.post('/newProject', (req, res) => {
    
})

// read, create, update, delete
// get, post, put, delete
/// req, res

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})