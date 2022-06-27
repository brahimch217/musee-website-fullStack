const mongoose = require('mongoose');

const CatShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Categories', CatShema);

