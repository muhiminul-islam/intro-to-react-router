import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default Post;