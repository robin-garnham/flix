const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const VideoPersistence = require('./video.persistence');

module.exports.storeVideo = async (req) => {
    
    const generatedID = uuidv4();
    const fileName = _.get(req, 'files.fileset.name');
    const filePath = _.get(req, 'files.fileset.path');

    return await VideoPersistence.storeVideo(generatedID, fileName, filePath);
};

module.exports.getVideoByID = async (videoID) => {

    return await VideoPersistence.getVideoByID(videoID);
    
};

module.exports.getVideos = async () => {

    return await VideoPersistence.getVideos();
};