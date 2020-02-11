const VideoRouter = require('../video.router');
const { Router } = require('restify-router');

test('VideoRouter returns a router', () => {
    expect(typeof VideoRouter).toBe(typeof new Router);
});

test('VideoRouter has routes attached', () => {
    expect(VideoRouter.routes.get.length).toBe(2);
    expect(VideoRouter.routes.post.length).toBe(1);
});