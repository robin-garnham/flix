const _ = require('lodash');
const { Router } = require('restify-router');
const VideoService = require('./video.service');
const routerInstance = new Router();

routerInstance.post('/upload', async (req, res, next) => {

    await VideoService.storeVideo(req);

    res.send({
        result: "SUCCESS"
    });

    return next();
});

routerInstance.get('/videos', async (req, res, next) => {
    
    const videos = await VideoService.getVideos();
    res.send(videos);
    return next();
});

routerInstance.get('/videos/:videoID', async (req, res, next) => {

    const videoID = _.get(req, 'params.videoID');

    if(!videoID) {
        return next(new Error("Invalid file name"));
    }

    const video = await VideoService.getVideoByID(videoID);
    video.on('open', function () {
        video.pipe(res);
    });
    return next();
});

module.exports = routerInstance;