import VideoService from '../video.service';
import VideoPersistence from '../video.persistence';
import uuid from 'uuid';

const fakeUUID = '1234-1234-1234-1234';

jest.mock('../video.persistence');
jest.spyOn(uuid, 'v4').mockReturnValue(fakeUUID);

describe("VideoService", () => {

    it("should have a storeVideo method", () => {
        expect(VideoService).toHaveProperty('storeVideo');
    })

    it("should have a getVideoByID method", () => {
        expect(VideoService).toHaveProperty('getVideoByID');
    })

    it("should have a getVideos method", () => {
        expect(VideoService).toHaveProperty('getVideos');
    })

    test('storeVideo invokes VideoPersistence correctly', () => {

        const fakePath = './some/path';
        const fakeFile = 'somefile.mp4';

        const request = {
            files: {
                file: {
                    path: fakePath,
                    name: fakeFile
                }
            }
        };
    
        VideoService.storeVideo(request);
        expect(VideoPersistence.storeVideo).toHaveBeenCalled();
        expect(VideoPersistence.storeVideo).toHaveBeenCalledTimes(1);
    });

    test('getVideoByID invokes VideoPersistence correctly', () => {

        const fakeID = '1234';

        VideoService.getVideoByID(fakeID);
        expect(VideoPersistence.getVideoByID).toHaveBeenCalled();
        expect(VideoPersistence.getVideoByID).toHaveBeenCalledTimes(1);
        expect(VideoPersistence.getVideoByID).toHaveBeenCalledWith(fakeID);
    });

    test('getVideos invokes VideoPersistence correctly', () => {

        VideoService.getVideos();
        expect(VideoPersistence.getVideos).toHaveBeenCalled();
        expect(VideoPersistence.getVideos).toHaveBeenCalledTimes(1);
        expect(VideoPersistence.getVideos).toHaveBeenCalledWith();
    });

})


