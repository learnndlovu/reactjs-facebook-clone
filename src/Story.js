import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

const Story = ({ image, profileSrc, title}) => {
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar className="story__avator" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
