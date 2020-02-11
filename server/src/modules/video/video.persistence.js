const fs = require('fs');
const { promisify } = require('util');
const createDirAsync = promisify(fs.mkdir);
const readDirAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.writeFile);
const STORAGE_LOCATION = './video-storage';

function generatedDate () {

    const currentDate = new Date();
    return new Date(currentDate.getTime() - (Math.random() * 1000000));
}

module.exports.storeVideo = async (videoID, fileName, filePath) => {
    
    await createDirAsync(`${STORAGE_LOCATION}/${videoID}`);
    return await writeFileAsync(`${STORAGE_LOCATION}/${videoID}/${fileName}`, filePath);
};

module.exports.getVideoByID = async (videoID) => {

    const directoryContents = await readDirAsync(`${STORAGE_LOCATION}/${videoID}`);

    if(directoryContents.length > 0) {
        const fileName = directoryContents[0];
        return fs.createReadStream(`${STORAGE_LOCATION}/${videoID}/${fileName}`);
    }
};

module.exports.getVideos = async () => {

    const directoryContents = await readDirAsync(STORAGE_LOCATION);

    return directoryContents.map((file, index) => {
        return {
            authorName: 'Richard Hendricks',
            duration: '17:29',
            id: index,
            createdAt: generatedDate(),
            file,
            timeAgo: '1 hour',
            videoName: 'Holiday Highlights',
        };
    });
};