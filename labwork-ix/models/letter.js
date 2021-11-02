const { Schema, model } = require("mongoose");

const letter = new Schema({
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        required: true,
    },
});

const recvLetter = new Schema({
    _id: {
        type: String,
        required: false,
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        required: true,
    },
});


module.exports = model("letters", letter);
