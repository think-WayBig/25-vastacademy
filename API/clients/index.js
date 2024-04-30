const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

const bucket = require('./firebase');
const multer = require('multer');
const upload = multer();

//=========== Models =============
let newProject = require("./models/newProject")

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

try {
    mongoose.connect(
        process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    console.log("connected successfully");
} catch (err) {
    console.log(err)
}

//The first route
app.get('/getProjects', async (req, res) => {
    try {
        let projects = await newProject.find({});
        res.send(projects);
    } catch (error) {
        console.log(error);
    }
})

//Get individual project
app.get('/getProject/:projectId', (req, res) => {
    try {
        let index = clientData.findIndex(project => project.pro_id === req.params.projectId);
        if (index != -1) {
            res.json({
                data: clientData[index],
                check: 1    // Data successful
            });
        } else {
            res.json({
                check: 2    // Not Found
            });
        }
    } catch (error) {
        res.json({
            msg: error.message,
            status: error.status,
            data: req.body,
            check: 0    //Data Error
        })
    }
})

//Create a new project
app.post('/newProject', async (req, res) => {
    let { category, pro_id, domain, client_name, dev_name, pro_status, progress,pro_logo } = req.body;
    try {
        let NewProject = new newProject({
            "pro_id": pro_id,
            "client_name": client_name,
            "domain": domain,
            "category": category,
            "dev_name" : dev_name,
            "pro_status": pro_status,
            "progress" :progress
        })

        await NewProject.save();

        res.json({
            msg: "Data sent successfully!",
            data: NewProject
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Data not sent!"
        });
    }
})

//Update client data
app.put('/updateProject/:projectId', async (req, res) => {
    let { category, pro_id, domain, client_name, dev_name, pro_status, progress,pro_logo } = req.body;
    try {
        await newProject.findOneAndUpdate({ projectId: req.params.projectId}, { category: category, pro_id: pro_id,  domain:  domain, client_name: client_name, dev_name: dev_name, pro_status: pro_status, progress : progress });
        let NewProject = await newProject.find({});
            res.json({
                msg: "Project updated successfully",
                status: "success",
                data: NewProject
            });
        // } else {
            
        //     res.status(404).json({
        //         msg: "Project not found",
        //         status: "error",
        //         data: req.body
        //     });
        // }

    } catch (error) {
        console.log(error);
        res.json({
            msg: "Project Not Found!"
        });
    }
});

app.delete('/deleteProject/:projectId', (req, res) => {
    try {
        let index = clientData.findIndex(project => project.pro_id === req.params.projectId);
        if (index == -1) {
            res.json({
                check: 2 // Not Found
            })
            return;
        }

        if (index != -1) {
            clientData.splice(index, 1);
            res.json({
                check: 1 // Project found
            })
        }
    } catch (error) {
        res.json({
            msg: error.message,
            status: error.status,
            data: req.params.projectId,
            check: 0    //Data Error
        })
    }
})

app.post('/uploadImage', upload.single('file'), async (req, res) => {
    try {
        const file = req.file; // Assuming you are using multer middleware for file upload

        if (file) {
            const fileName = `${Date.now()}_${file.originalname}`;
            const fileBlob = bucket.file(fileName);

            const blobStream = fileBlob.createWriteStream({
                metadata: {
                    contentType: file.mimetype,
                },
            });

            blobStream.on('error', (error) => {
                console.log(error);
                res.status(500).json({
                    message: 'Failed to upload document',
                    error: error.message,
                });
            });

            blobStream.on('finish', async () => {
                // Updated code for generating signed URL with a valid expiration date
                const expirationDate = new Date();
                expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set to expire in 1 year

                const [url] = await fileBlob.getSignedUrl({
                    action: 'read',
                    expires: expirationDate,
                });

                res.status(200).json({
                    message: 'Document uploaded successfully',
                    storageUrl: url,
                });
            });

            blobStream.end(file.buffer);
        } else {
            res.status(400).json({
                message: 'No file provided in the request',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to upload document',
            error: error.message,
        });
    }
});

// read, create, update, delete
// get, post, put, delete
/// req, res

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})