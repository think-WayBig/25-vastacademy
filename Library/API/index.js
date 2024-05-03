//=========== Packages Import =============
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

//=========== Middlewares Setup =============
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//=========== Mongoose Connection =============
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

const port = 3001;
app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

//=========== Models =============
let Theme = require('./models/theme');

app.get('/getThemes', async (req, res) => {
    try {
        let themes = await Theme.find({});

        res.send({
            check: 1,
            data: themes
        })
    } catch (error) {
        res.send({
            check: 0,
            error: error.message
        })
    }
})

app.get('/getTheme/:themeId', async (req, res) => {
    let themeId = req.params.themeId;
    try {
        let theme = await Theme.findOne({ id: themeId });

        if (theme === null) {
            res.send({
                check: 2,
                data: themeId
            })
        } else {
            res.send({
                check: 1,
                data: theme,
                id: themeId
            })
        }
    } catch (error) {
        res.send({
            check: 0,
            id: themeId,
            error: error.message
        })
    }
})

app.get('/getThemeFromCategory/:themeCategory', async (req, res) => {
    let themeCategory = req.params.themeCategory;
    try {
        let themes = await Theme.find({ category: themeCategory });

        if (themes === null) {
            res.send({
                check: 2,
                data: `No themes found for category ${themeCategory}`
            });
        } else {
            res.send({
                check: 1,
                data: themes
            });
        }
    } catch (error) {
        res.send({
            check: 0,
            error: error.message
        });
    }
});


app.post("/newTheme", async (req, res) => {
    let { id, name, description, category } = req.body;
    try {
        let newTheme = new Theme({
            id, name, description, category
        });
        await newTheme.save();

        res.send({
            data: { id, name, description, category },
            check: 1
        })
    } catch (error) {
        res.send({
            data: { id, name, description, category },
            check: 0,
            error: error.message
        })
    }
})

app.delete('/deleteTheme/:themeId', async (req, res) => {
    let themeId = req.params.themeId;
    try {
        let deletedTheme = await Theme.findOneAndDelete({ id: themeId });

        if (deletedTheme === null) {
            res.send({
                check: 2,
                id: themeId,
                data: `Theme with ID ${themeId} not found`
            });
        } else {
            res.send({
                check: 1,
                id: themeId,
                message: `Theme with ID ${themeId} deleted successfully`
            });
        }
    } catch (error) {
        res.send({
            check: 0,
            id: themeId,
            error: error.message
        });
    }
});