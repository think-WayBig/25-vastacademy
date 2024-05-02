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
        type: Array,        // [{endpoint: '2', selected: 0}, {url: 'https://lib.vacomputers.com/theme2', selected: 0}, {url: 'https://lib.vacomputers.com/theme3', selected: 0}]
        required: true
    }
});

const NewProject = mongoose.model("projects", newProject);
module.exports = NewProject;