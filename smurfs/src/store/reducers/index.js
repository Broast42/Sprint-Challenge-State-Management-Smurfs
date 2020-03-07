import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, ADD_SUCESS, ADD_FAILURE, EDIT_FAILURE, EDIT_SUCESS } from '../actions';

const initialState = {
    smurfs: [],
    fetching: false,
    error: ''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                fetching: true,
                error: ""
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetching: false,
                error: ""
            };
        case FETCHING_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case ADD_SUCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ""
            };
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case EDIT_SUCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ""
            };
         case EDIT_FAILURE:
            return {
                 ...state,
                error: action.payload
            };
        default:
            return state;
    }
};