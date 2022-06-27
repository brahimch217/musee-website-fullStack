const mongoose = require('mongoose');
const Categories = require("../models/Category");
const CategoriesData = Categories.find({});
const category = { CategoriesData }


const ArtisanShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },

    Category: {
        type: String,
        enum: ["أدوات-حجرية", "أدوات-معمارية", "زليج", "فخار", "مسكوكات"],
        required: true
    },
    Discreption: {
        type: String,
        required: true
    },
    Safety: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Artisan', ArtisanShema);

