require('../models/database');

const Discover = require('../models/Discover');
const Filds = require('../models/Filds');
const Events = require('../models/event');
const Artisan = require('../models/Artisan');
const Words = require("../models/Words");
const Categories = require("../models/Category");

/**
 * GET / 
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {
        const discover = await Discover.find({});

        const fildsData = await Filds.find({});
        const filds = { fildsData }

        const LimitNumber = 3
        const eventsData = await Events.find({}).limit(LimitNumber);
        const events = { eventsData }

        const artisanData = await Artisan.find({});
        const artisan = { artisanData }

        const wordsData = await Words.find({});
        const words = { wordsData }

        const CategoriesData = await Categories.find({});
        const category = { CategoriesData }

        res.render('index', { discover, filds, events, artisan, words, fildsData, category });

    } catch (error) {
        console.log(error)
    }
}
exports.login = async (req, res) => {
    try {
        res.render('page-login');
    }
    catch (error) {
        console.log(error)
    }
}

exports.Whilelogin = async (req, res) => {
    const credential = {
        email: "admin@admin.com",
        pass: "admin"
    }
    if (req.body.email == credential.email && req.body.pass == credential.pass)
        try {
            res.redirect('/admin/admin:fefljjirgfg5784xfg5erg754ffg87r5cgr',);
        } catch (error) {
            console.log(error)
        }
}

exports.vrtPage = async (req, res) => {
    try {
        res.render('vrt');
    }
    catch (error) {
        console.log(error)
    }
}
exports.Events = async (req, res) => {
    try {
        const eventsData = await Events.find({});
        const events = { eventsData }
        res.render('events', { events });
    }
    catch (error) {
        console.log(error)
    }
}
exports.Collections = async (req, res) => {

    try {


        const CategoriesData = await Categories.find({});
        const category = { CategoriesData }


        const artisanData = await Artisan.find({});
        const artisan = { artisanData }

        res.render('Collections', { artisan, category });
    }
    catch (error) {
        console.log(error)
    }
}

exports.Discover = async (req, res) => {

    try {

        const discover = await Discover.find({});

        res.render('artisan', { discover });
    }
    catch (error) {
        console.log(error)
    }
}
exports.Tarmim = async (req, res) => {

    try {



        res.render('tarmim');
    }
    catch (error) {
        console.log(error)
    }
}

exports.Contact = async (req, res) => {

    try {



        res.render('contact');
    }
    catch (error) {
        console.log(error)
    }
}






