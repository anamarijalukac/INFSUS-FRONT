import * as api from '../api/index.js';

export const getOrchestras = () => async (dispatch) => {
    try {
        const {data} = await api.fetchOrchestras()
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (e) {
        console.log(e);
    }
}

export const getOrchestraById = (orchestraID) => async (dispatch) => {
    try {
        const {data} = await api.fetchOrchestrasById(orchestraID)
        dispatch({type: 'FETCH_ORCHESTRA', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createOrchestra = (orchestra) => async (dispatch) => {
    try {

        const {data} = await api.createOrchestra(orchestra);
        dispatch({type: 'CREATE', payload: data})
    } catch (e) {
        console.log(e);
    }

}




export const deleteOrchestra = (id) => async (dispatch) => {
    try {

        await api.deleteOrchestra(id)
        dispatch({type: 'DELETE', payload: id})
    } catch (e) {
        console.log(e);
    }
}

export const updateOrchestra = (id,orchestra) => async (dispatch) => {
    try {

        await api.updateOrchestra(id,orchestra)
        dispatch({type: 'UPDATE', payload: id})
    } catch (e) {
        console.log(e);
    }
}