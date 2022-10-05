import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name,phone,address}=friend
    console.log(friend)
    return (
        <div>

            <h2>Everything you need to know about this person </h2>
            <h3>Name:{name}</h3>
            <p>Phone:{phone}</p>
            <p>Address:{address.city}</p>
        </div>
    );
};

export default FriendDetails;