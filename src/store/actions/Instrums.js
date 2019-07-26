import API from '../../utils/Api';

export const setInstrums = (list) => ({
    type: 'SET_INSTRUMS',
    list
});

export const getInstumTypes = (text) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/get-instrums`);
            dispatch(setInstrums(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}