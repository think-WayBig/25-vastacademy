const mongoose = require("mongoose");

const newTheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }
});

const theme = mongoose.model("themes", newTheme);
module.exports = theme;