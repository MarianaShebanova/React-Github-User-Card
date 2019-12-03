import React from 'react';

const UserCard = props => {
    return (
        <div>
            <h2>{props.card.name}</h2>
            <img src={props.card.avatar_url}></img>
            <h3>{props.card.location}</h3>
            <h3>{props.card.bio}</h3>
        </div>
    );
};

export default UserCard;
