import React from 'react';
import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions'

const AddForm = (props) => {

    const [name, handleName] = useInput('');
    const [age, handleAge] = useInput('');
    const [height, handleHeight] = useInput('');

    return(
        <div>
            <input type="text" placeholder="Name" onChange={ e => handleName(e.target.value) }/>
            <input type="text" placeholder="Age" onChange={ e => handleAge(e.target.value) }/>
            <input type="text" placeholder="Height in cm" onChange={ e => handleHeight(e.target.value) }/>
            <button onClick={()=>props.addSmurf(name, age, height)}>Submit</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(AddForm);