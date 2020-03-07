import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADD_SUCESS = 'ADD_SUCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const EDIT_SUCESS = 'EDIT_SUCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export const DELETE_SUCESS = 'DELETE_SUCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch ({type: FETCHING_START});

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            //console.log("axios call", res.data );
            dispatch({type: FETCHING_SUCCESS, payload: res.data});
        })
        .catch(err => {
            //console.log("axios error", err);
            dispatch({type: FETCHING_FAILURE, payload: err});
        });

};

export const addSmurf = (name, age, height) => dispatch => {
    const newSmurf = {name: name, age: age, height: height};
    
    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res =>{
            //console.log('add smurf', res.data);
            dispatch({type: ADD_SUCESS, payload: res.data})
        })
        .catch(err =>{
            //console.log('add error', err);
            dispatch({type: ADD_FAILURE, payload: err})
        });

};

export const editSmurf = (id, name, age, height) => dispatch => {
    const newSmurf = {name: name, age: age, height: height};

    axios
        .put(`http://localhost:3333/smurfs/${id}`, newSmurf)
        .then(res =>{
            console.log('edit smurf', res.data);
            dispatch({type: EDIT_SUCESS, payload: res.data})
        })
        .catch(err =>{
            console.log('edit error', err);
            dispatch({type: EDIT_FAILURE, payload: err})
        });
};

export const deleteSmurf = (id) => dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res =>{
            console.log('edit smurf', res.data);
            dispatch({type: DELETE_SUCESS, payload: res.data})
        })
        .catch(err =>{
            console.log('edit error', err);
            dispatch({type: DELETE_FAILURE, payload: err})
        });
};