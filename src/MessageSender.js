import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageURL, setImageUrl] = useState('');

    const [{ user }, dispatch] = useStateValue();

    const onSubmit = (e) => {
        e.preventDefault();

        // do some db clever stuff
        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          image: imageURL,
          username: user.displayName,
        })

        setInput('');
        setImageUrl('');
    }

    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    
    const onImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    return (
      <div className="messageSender">
        <div className="messageSender__top">
          <Avatar src={user.photoURL}/>
          <form>
            <input
              onChange={onInputChange}
              value={input}
              className="messageSender__input"
              type="text"
              placeholder={`What's on your mind ${user.displayName}?`}
            />

            <input
              onChange={onImageUrlChange}
              value={imageURL}
              type="text"
              placeholder="message URL (optional)"
            />

            <button onClick={onSubmit} type="submit">
              hidden submit
            </button>
          </form>
        </div>

        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

export default MessageSender
