const express = require('express');
const app = express();

//The first route
app.get('/projects', (req, res) => {
    res.json({
        info: "Project 1"
    })
})

// create, read, update, delete
// get, post, put, delete
/// req, res

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})