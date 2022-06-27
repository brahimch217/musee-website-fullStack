const express = require('express');
const expressLayout = require('express-ejs-layouts');


const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');




const routes = require('./server/routes/disRoutes');
app.use('/', routes);





const artisanData = require('./server/models/Artisan');
const DiscoverData = require('./server/models/Discover');
const eventsData = require('./server/models/event');
const FilesData = require('./server/models/Filds');
const wordsData = require('./server/models/Words');

/**
 * CRUD Artisan Cards  
 */
app.get('/api/artisan', async (req, res) => {
    const Artisan = await artisanData.find();
    res.send(Artisan);
});
app.post('/api/artisan', async function (req, res) {
    await artisanData.create(req.body);
    res.send(req.body)
})



/**
 * CRUD Discover Cards 
 */
app.get('/api/discover', async (req, res) => {
    const Discover = await DiscoverData.find();
    res.send(Discover);
});
app.post('/api/discover', async function (req, res) {
    await DiscoverData.create(req.body);
    res.send(req.body)
});

app.put('/api/discover/:id', async (req, res, next) => {
    DiscoverData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (discover) {
        DiscoverData.findOne({ _id: req.params.id }).then(function (discover) {
            res.send(discover);
        })
    })
});


app.delete('/api/discover/:id', async (req, res, next) => {
    DiscoverData.findByIdAndDelete(
        { _id: req.params.id }).then(function (discover) {
            res.send(discover);
        })

})



/**
 * CRUD Event Cards 
 */
app.get('/api/event', async (req, res) => {
    const Events = await eventsData.find();
    res.send(Events);
});
app.post('/api/event', async function (req, res) {
    await eventsData.create(req.body);
    res.send(req.body)
});
app.put('/api/event/:id', async (req, res, next) => {
    eventsData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (Events) {
        eventsData.findOne({ _id: req.params.id }).then(function (Events) {
            res.send(Events);
        })
    })
});


app.delete('/api/event/:id', async (req, res, next) => {
    eventsData.findByIdAndDelete(
        { _id: req.params.id }).then(function (Events) {
            res.send(Events);
        })

})



/**
 * CRUD Files Timeline 
 */
app.get('/api/files', async (req, res) => {
    const Files = await FilesData.find();
    res.send(Files);
});
app.post('/api/files', async function (req, res) {
    await FilesData.create(req.body);
    res.send(req.body)
})
app.put('/api/files/:id', async (req, res, next) => {
    FilesData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (Events) {
        FilesData.findOne({ _id: req.params.id }).then(function (files) {
            res.send(files);
        })
    })
});


app.delete('/api/files/:id', async (req, res, next) => {
    FilesData.findByIdAndDelete(
        { _id: req.params.id }).then(function (files) {
            res.send(files);
        })

})

/**
 * CRUD Word Cards 
 */
app.get('/api/words', async (req, res) => {
    const words = await wordsData.find();
    res.send(words);
});
app.post('/api/words', async function (req, res) {
    await wordsData.create(req.body);
    res.send(req.body)
})
app.put('/api/words/:id', async (req, res, next) => {
    wordsData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (words) {
        wordsData.findOne({ _id: req.params.id }).then(function (words) {
            res.send(words);
        })
    })
});
app.delete('/api/words/:id', async (req, res, next) => {
    wordsData.findByIdAndDelete(
        { _id: req.params.id }).then(function (words) {
            res.send(words);
        })

})




const adminRouter = require('./server/routes/admin.router')
app.use("/admin/admin:fefljjirgfg5784xfg5erg754ffg87r5cgr", adminRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

