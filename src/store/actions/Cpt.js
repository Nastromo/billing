import API from '../../utils/Api';
import { setMode } from '../actions/Create';


export const showCode = (index) => ({
    type: 'SHOW_CPT',
    index
});

export const setCpts = (list) => ({
    type: 'SET_CPTS',
    list
});

export const setChosenCpt = (obj) => ({
    type: 'SET_CHOSEN_CPT',
    obj
});

export const setSelectedCptRow = (index) => ({
    type: 'SET_SELECTED_CPT_ROW',
    index
});

export const setCpt = (index) => {
    return async (dispatch, getState) => {
        const list = getState().cpt;
        dispatch(setMode(false));
        dispatch(setChosenCpt(list[index]));
        dispatch(setSelectedCptRow(index));
    }
}

export const delDiag = (index) => ({
    type: 'DEL_DIAG',
    index
});

export const setLoading = (bool) => ({
    type: 'SET_CPTS_LOAD',
    bool
});

export const setError = (bool) => ({
    type: 'SET_CPTS_ERROR',
    bool
});

export const getCpt = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await API.get(`/v1/cpts`);
            dispatch(setChosenCpt(res.data[0]));
            dispatch(setSelectedCptRow(0));
            dispatch(setLoading(false));
            dispatch(setCpts(res.data));
        } catch (err) {
            dispatch(setLoading(false));
            dispatch(setError(true));
            console.log(err);
        }
    }
}


export const setCptCode = (text) => ({
    type: 'SET_CPT_CODE',
    text
});

export const setCptDesc = (text) => ({
    type: 'SET_CPT_DESC',
    text
});

export const setCptMod = (text) => ({
    type: 'SET_CPT_MOD',
    text
});

export const setCptFee = (text) => ({
    type: 'SET_CPT_FEE',
    text
});



export const createCpt = (cpt) => {
    return async (dispatch, getState) => {
        try {
            console.log(cpt);
            const res = await API.post(`/v1/create-cpt`, cpt);
            dispatch(setChosenCpt(res.data[0]));
            dispatch(setSelectedCptRow(0));
            dispatch(setCpts(res.data));
            dispatch(setMode(false));
        } catch (err) {
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const updateCpt = (cpt) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/update-cpt`, cpt);
            dispatch(setCpts(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}