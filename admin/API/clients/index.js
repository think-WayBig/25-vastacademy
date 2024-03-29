const clientData = require('./data.json');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
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
    let { category, pro_id, domain, client_name, pro_status, progress, pro_logo } = req.body;
    try {
        clientData.push({
            "pro_id": pro_id,
            "client_name": client_name,
            "domain": domain,
            "category": category,
            "pro_status": pro_status,
            "progress": progress,
            "pro_logo": pro_logo
        })

        res.json({
            msg: "Data sent successfully!"
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Data not sent!"
        });
    }
})

// read, create, update, delete
// get, post, put, delete
/// req, res

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})