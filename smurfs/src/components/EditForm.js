import React from 'react';
import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { editSmurf } from '../store/actions'

const EditForm = (props) => {

    const [name, handleName] = useInput(props.data.name);
    const [age, handleAge] = useInput(props.data.age);
    const [height, handleHeight] = useInput(props.data.height);

    return(
        <div>
            <input type="text" placeholder="Name" value={name} onChange={ e => handleName(e.target.value) }/>
            <input type="text" placeholder="Age" value={age} onChange={ e => handleAge(e.target.value) }/>
            <input type="text" placeholder="Height in cm" value={height} onChange={ e => handleHeight(e.target.value) }/>
            <button onClick={()=>props.editSmurf(props.data.id, name, age, height)}>Submit</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {editSmurf})(EditForm);