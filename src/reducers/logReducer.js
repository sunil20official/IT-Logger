import {GET_LOGS ,
       SET_LOADING ,
       LOGS_ERROR ,
       ADD_LOG , 
       DELETE_LOG , 
       SET_CURRENT , 
       CLEAR_CURRENT , 
       UPDATE_LOG, 
       SEARCH_LOGS,
       CLEAR_FILTER
    } from '../actions/types';

const initialState = {
    logs : null ,
    current : null,
    loading : false,
    errors : null,
    filtered: null
};

const logReducer = (state = initialState , action) => {
    switch(action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [action.payload,...state.logs],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload ),
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => 
                    log.id === action.payload.id ? action.payload : log
                ) 
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                errors: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        case SEARCH_LOGS:
            return {
                ...state,
                filtered: state.logs.filter(log => {
                    const regex = new RegExp(`${action.payload}` , 'gi');
                    return log.message.match(regex) || log.tech.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
};

export default logReducer;