import { setChosenCpt } from './Cpt';

export const setMode = (bool) => ({
    type: 'SET_CREATE_MODE',
    bool
});


export const setCreateMode = (index) => {
    return async (dispatch, getState) => {
        dispatch(setMode(true))
        dispatch(setChosenCpt({}));
    }
}