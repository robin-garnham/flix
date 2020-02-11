import VideoCard from '../VideoCard.component';
import React from 'react';
import { mount } from 'enzyme';


describe("VideoCard", () => {

    test('mounts', () => {

        const wrapper = mount(
            <VideoCard />
        );
    });

    test('renders labels', () => {

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
            <VideoCard {...video} />
        );

        expect(wrapper.find('.video-duration').text()).toBe(video.duration);
        expect(wrapper.find('.video-name').text()).toBe(video.videoName);
        expect(wrapper.find('.video-author').text()).toBe(video.authorName);
        expect(wrapper.find('.uploaded-at').text()).toBe(video.timeAgo);
    });

    test('being clicked triggers the callback', () => {

        const mockCallBack = jest.fn();

        const wrapper = mount(
            <VideoCard watchVideo={mockCallBack} />
        );

        wrapper.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    test('being clicked invokes with the correct ID', () => {

        const video = { 
            authorName: 'Bon Jovi',
            duration: '15:12',
            id: 3,
            createdAt: new Date(),
            file: '2345-fdsa-23rs-2376',
            timeAgo: '2 hours ago',
            videoName: 'Me surfing',
        };

        const mockCallBack = jest.fn();

        const wrapper = mount(
            <VideoCard {...video} watchVideo={mockCallBack} />
        );

        wrapper.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack).toHaveBeenCalledWith(video.file);
    });
});