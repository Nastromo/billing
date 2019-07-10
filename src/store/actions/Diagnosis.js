import API from '../../utils/Api';


export const setLoading = (bool) => ({
    type: 'SET_DIAG_LOAD',
    bool
});

export const setError = (bool) => ({
    type: 'SET_DIAG_ERROR',
    bool
});

export const setDiagnosis = (list) => ({
    type: 'SET_DIAG_LIST',
    list
});

export const getDiagnosis = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await API.get(`/v1/diagnosis`);
            dispatch(setLoading(false));
            dispatch(setDiagnosis(res.data));
        } catch (err) {
            dispatch(setLoading(false));
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const addDiag = (obj) => ({
    type: 'ADD_DIAG',
    obj
});