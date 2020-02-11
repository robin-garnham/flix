import VideoService from '../video.service';
import VideoPersistence from '../video.persistence';

jest.mock('../video.persistence');

describe("VideoService", () => {

    beforeEach(() => {
        VideoPersistence.mockReset();
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });

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

        const request = {
            files: {
                file: {
                    path: './some/path',
                    name: 'somefile.mp4'
                }
            }
        };
    
        VideoService.storeVideo(request);
    });

})


