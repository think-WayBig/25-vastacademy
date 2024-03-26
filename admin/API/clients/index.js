const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//The first route
app.get('/projects', (req, res) => {
    res.json({
        pro_id:'00002',
        client_name: 'Client Name',
        domain: 'https://www.hi.com',
        category: 'Portfolio',
        pro_status: 'Last Testing Stage - Deadline 25th March',
        progress: '70%',
        pro_logo: 'https://fakeimg.pl/100x100'
    })
})

// read, create, update, delete
// get, post, put, delete
/// req, res

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})