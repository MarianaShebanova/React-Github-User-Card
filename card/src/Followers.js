import React from 'react';
import Item from './Item';

const Followers = props => {
    console.log(props);
    return (
        <div>
            {props.followers.map((item, index) => (
                <Item key={item.index} item={item} />
            ))}
        </div>
    );
};

export default Followers;