const mongoose = require('mongoose');

const WordsShema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    word: {
        type: String,
        required: true,
    },
    data_id: {
        type: String,
        required: true,
        enum: ["1", "2", "3"]
    },
    desplay: {
        type: String,
        enum: "feedback-display"
    }
})

module.exports = mongoose.model('Words', WordsShema);