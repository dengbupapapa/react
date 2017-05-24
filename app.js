const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const asyncRequest = require('./request/index.js');
const arg = require('./arguments.config.js');
const useResources = require('./useResources.js');
const middleware = require('./middleware/index.js');

app.use(logger('dev'));
//禁用x-powered-by
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

asyncRequest.init(app); //minirouter
if (!arg.env) {
    useResources.init(app);
} //useResources
middleware.init(app); //middleware

app.use(function(err, req, res, next) { //errer middleware
    console.log(err);
    res.send(err);
});

module.exports = app;