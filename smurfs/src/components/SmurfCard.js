import React from 'react';

const SmurfCard = (props) => {
    return(
        <div className="card" >
            <h2>{props.data.name}</h2>
            <h3>Age: {props.data.age}</h3>
            <h3>Height: {props.data.height}</h3>
        </div>
    );
};

export default SmurfCard;