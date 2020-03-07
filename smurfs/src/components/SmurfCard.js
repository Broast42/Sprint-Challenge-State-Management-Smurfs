import React, { useState }from 'react';
import EditForm from './EditForm';

const SmurfCard = (props) => {
    
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () =>{
        setShowForm(!showForm);
    }
    return(
        <div className="card" >
            <h2>{props.data.name}</h2>
            <h3>Age: {props.data.age}</h3>
            <h3>Height: {props.data.height}</h3>
            <button onClick={()=> toggleForm()}>Edit</button>
            {showForm === true ? <EditForm data={props.data}/> : ""}
        </div>
    );
};

export default SmurfCard;