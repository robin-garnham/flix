// Packages
const corsMiddleware = require('restify-cors-middleware');
const restify = require('restify');

// Local variables
const SERVER_PORT = process.env.PORT || 4000;
const server = restify.createServer();

// Basic logging method
server.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

// Simple Healthcheck
server.get("/", function (req, res, next) {
	res.send({
        status: "Online"
    });
	return next();
});

// CORS
const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
});
server.pre(cors.preflight);
server.use(cors.actual);

// Body parser
server.use(restify.plugins.bodyParser());

// Query parser
server.use(restify.plugins.queryParser());

// Custom routes
require('./modules/video/video.router').applyRoutes(server);

// Start the server
server.listen(SERVER_PORT, '0.0.0.0');
console.log(`Server started on port ${SERVER_PORT}`);