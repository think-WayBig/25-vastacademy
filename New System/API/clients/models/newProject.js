const mongoose = require("mongoose");

const newProject = new mongoose.Schema({
    pro_id: {
        type: String,
        required: true,
        unique: true
    },
    client_name: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pro_status: {
        type: String,
        required: true
    },
    pro_logo: {
        type: String,
        default: 'https://fakeimg.pl/100x100'
    },
    dev_name: {
        type: String,
        required: true
    },
    dev_logo: {
        type: String,
        default: 'https://fakeimg.pl/100x100'
    },
    progress: {
        type: String,
        default: '1'
    },
    themes: {
        type: Array,        // [{themeId: '2', selected: 0}, {themeId: '3', selected: 0}, {themeId: '4', selected: 0}]
        // required: true,
        default: [{ themeId: '1', selected: 0 }, { themeId: '2', selected: 0 }, { themeId: '3', selected: 0 }]
    },
    websiteBtn: {
        type: Object,       // {text: "Select Theme", state: "0"} {text: "Check Website", state: "1"}
        // required: true,
        default: {
            text: "Select Theme", state: "0" 
        }
    }
});

const NewProject = mongoose.model("projects", newProject);
module.exports = NewProject;