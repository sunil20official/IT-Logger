import {GET_LOGS ,
        SET_LOADING ,
        LOGS_ERROR , 
        ADD_LOG , 
        DELETE_LOG , 
        SET_CURRENT , 
        CLEAR_CURRENT , 
        UPDATE_LOG ,
        SEARCH_LOGS,
        CLEAR_FILTER
} from './types';

  // Get logs from server
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        })
    }
};

//add log

export const addLog = ( log ) => async dispatch => {
        try {
            setLoading();
            const res = await fetch("/logs" , {
                                method: "POST",
                                body: JSON.stringify(log),
                                 headers: {
                                     'Content-Type':'application/json'
                                 }
                                 })
            const data = await res.json();
            dispatch({
                type: ADD_LOG,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            });
        }
} 

// delete log from server
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
            fetch(`/logs/${id}`, { method:"DELETE"} );
            dispatch({
                type: DELETE_LOG,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            });
        }
    };
};

// update log 
export const updateLog = (log) => async dispatch => {
        try {
            setLoading();
            const res = await fetch(`/logs/${log.id}`, {
                method:'PUT' , body:JSON.stringify(log) , headers:{'Content-Type':'application/json'} });
            const data = await res.json();
            dispatch({
                type:UPDATE_LOG,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            });
        }
}


//set current
export const setCurrent = (log) => {
    return {
            type: SET_CURRENT,
            payload: log
    };
};

//clear current
export const clearCurrent = () => {
    return {
            type: CLEAR_CURRENT
    };
};

//set loading
export const setLoading = () => {
    return {
        type:SET_LOADING
    };
};

//search logs
export const searchLogs = (text) => async dispatch => {
    dispatch({
        type: SEARCH_LOGS,
        payload: text
    });
};

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
}