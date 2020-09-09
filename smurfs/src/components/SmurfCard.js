import React, { useState }from 'react';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { deleteSmurf } from '../store/actions';

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
            <button onClick={()=> deleteSmurf(props.data.id)}>Delete Smurf</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {deleteSmurf})(SmurfCard);