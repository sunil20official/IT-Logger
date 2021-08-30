
import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from './types';

// getting technicians from the server
export const getTechs = () => async dispatch => {
    setLoading();
    try {
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload: err.response.data
        });
    }
};

// adding technicians to the server
export const addTech = ( tech ) => async dispatch => {
    try {
        setLoading();
        const res = await fetch("/techs" , {
                            method: "POST",
                            body: JSON.stringify(tech),
                             headers: {
                                 'Content-Type':'application/json'
                             }
                             })
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.data
        });
    }
} 

// delete technicians from the server
export const deleteTech = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
            fetch(`/techs/${id}`, { method:"DELETE"} );
            dispatch({
                type: DELETE_TECH,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: TECHS_ERROR,
                payload: err.response.data
            });
        }
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}