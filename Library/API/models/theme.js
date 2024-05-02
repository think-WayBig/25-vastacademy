const mongoose = require("mongoose");

const newTheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: "AnonTheme"
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const theme = mongoose.model("themes", newTheme);
module.exports = theme;