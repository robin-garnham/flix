import VideoCard from './VideoCard.component';
import React from 'react';
import { mount } from 'enzyme';

test('VideoCard mounts correctly', () => {

    const video = { 
        authorName: 'Bon Jovi',
        duration: '15:12',
        id: 3,
        createdAt: new Date(),
        file: '2345-fdsa-23rs-2376',
        timeAgo: '2 hours ago',
        videoName: 'Me surfing',
     };

    const wrapper = mount(
        <VideoCard video={video} />
    );

    expect(wrapper.find('.image-duration').text()).toBe(video.duration);
    expect(wrapper.find('.video-name').text()).toBe(video.videoName);
    expect(wrapper.find('.video-author').text()).toBe(video.authorName);
    expect(wrapper.find('.uploadedAt').text()).toBe(video.timeAgo);
});