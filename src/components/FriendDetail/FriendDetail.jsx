import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {name, phone} = friend
    return (
        <div>
            <h3>Everything from this person is here</h3>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;