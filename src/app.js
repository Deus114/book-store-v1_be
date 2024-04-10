require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const connection = require('./config/database')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

app.use(express.static(path.join(__dirname, 'src/public/images/uploads')));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// default options
app.use(fileUpload());

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app)

app.use('/', webRoutes);
app.use('/api/', apiRoutes);

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>>> DB conect error: ', error);
    }
})()
