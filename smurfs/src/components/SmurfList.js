import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../store/actions';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    return(
        <div >
            <button onClick={() => props.getSmurfs()} >Get a list of Smurfs</button>
            <div className="flexDisplay">
                {props.error !== "" ? `Error: ${props.error}`:
                    props.smurfs.map(x => (
                        <SmurfCard key={x.id} data={x} />
                ))}
            </div>
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);