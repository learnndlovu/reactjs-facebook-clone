import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="/images/image.jpg"
                profileSrc="./images/profile-pic.jpg"
                title="Learn Ndlovu"
            />
            <Story
                image="/images/image.jpg"
                profileSrc="./images/profile-pic.jpg"
                title="Learn Ndlovu"
            />
            <Story
                image="/images/image.jpg"
                profileSrc="./images/profile-pic.jpg"
                title="Learn Ndlovu"
            />
            <Story
                image="/images/image.jpg"
                profileSrc="./images/profile-pic.jpg"
                title="Learn Ndlovu"
            />
            <Story
                image="/images/image.jpg"
                profileSrc="./images/profile-pic.jpg"
                title="Learn Ndlovu"
            />
        </div>
    )
}

export default StoryReel
