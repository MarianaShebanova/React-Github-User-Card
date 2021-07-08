import React from 'react';

const Item = props => {
    return (
        <div>
            <p>{props.item.login}</p>
        </div>
    );
};

export default Item;
