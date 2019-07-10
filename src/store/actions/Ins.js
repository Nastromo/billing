import API from '../../utils/Api';


export const setLoading = (bool) => ({
    type: 'SET_INS_LOAD',
    bool
});

export const setError = (bool) => ({
    type: 'SET_INS_ERROR',
    bool
});

export const setIns = (list) => ({
    type: 'SET_INS',
    list
});

export const setMode = (bool) => ({
    type: 'SET_CREATE_MODE_INS',
    bool
});

export const setCreateMode = () => {
    return async (dispatch, getState) => {
        dispatch(setMode(true));
        dispatch(setChosenIns({}));
    }
};

export const showIns = (index) => {
    return async (dispatch, getState) => {
        const list = getState().insurances;
        dispatch(setMode(false));
        dispatch(setChosenIns(list[index]));
        dispatch(setSelectedInsRow(index));
    }
}

export const setChosenIns = (obj) => ({
    type: 'SET_CHOSEN_INSURANCE',
    obj
});

export const setSelectedInsRow = (index) => ({
    type: 'SET_INSURANCE_ROW',
    index
});

export const getInsurances = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await API.get(`/v1/insurances`);
            dispatch(setChosenIns(res.data[0]));
            dispatch(setSelectedInsRow(0));
            dispatch(setLoading(false));
            dispatch(setIns(res.data));
        } catch (err) {
            dispatch(setLoading(false));
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const setName = (text) => ({
    type: 'SET_INS_NAME',
    text
});

export const setAddress = (text) => ({
    type: 'SET_INS_ADDRESS',
    text
});

export const setCity = (text) => ({
    type: 'SET_INS_CITY',
    text
});

export const setState = (text) => ({
    type: 'SET_INS_STATE',
    text
});

export const setZip = (text) => ({
    type: 'SET_INS_ZIP',
    text
});

export const setPhone = (text) => ({
    type: 'SET_INS_PHONE',
    text
});

export const setNeic = (text) => ({
    type: 'SET_INS_NEIC',
    text
});

export const setProvider = (text) => ({
    type: 'SET_INS_PROV',
    text
});

export const setRequest = (text) => ({
    type: 'SET_INS_REQUEST',
    text
});

export const setNotes = (text) => ({
    type: 'SET_INS_NOTES',
    text
});


export const createIns = (ins) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/create-ins`, ins);
            dispatch(setChosenIns(res.data[0]));
            dispatch(setSelectedInsRow(0));
            dispatch(setIns(res.data));
            dispatch(setMode(false));
        } catch (err) {
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const updateIns = (ins) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/update-ins`, ins);
            dispatch(setIns(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}
