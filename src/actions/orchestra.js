import * as api from '../api/index.js';

export const getOrchestras = () => async (dispatch) => {
    try {
        const {data} = await api.fetchOrchestras();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (e) {
        console.log(e);
    }
}

export const getOrchestraById = (orchestraID) => async (dispatch) =>{
    try {
        const {data} = await api.fetchOrchestrasById(orchestraID)
        dispatch({type: 'FETCH_ORCHESTRA', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createOrchestra = (orchestra) => async (dispatch) => {
    try {
        console.log("ide novi orkestar from action")
        console.log(orchestra)
        const {data} = await api.createOrchestra(orchestra);
        dispatch({type: 'CREATE', payload: data})
    } catch (e) {
        console.log(e);
    }

}