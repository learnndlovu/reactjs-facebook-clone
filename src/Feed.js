import React,{ useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';



const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            } ))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map(post => {
               return (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
               ) 
            })}  
        </div>
    )
}

export default Feed;
