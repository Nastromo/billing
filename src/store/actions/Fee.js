import API from '../../utils/Api';
import { showNotification } from './Notification';


export const setTestInput = (text) => ({
    type: 'SET_TEST_INPUT',
    text
});

export const setTestsLoading = (bool) => ({
    type: 'SET_TEST_LOADING',
    bool
});

export const setTestsList = (list) => ({
    type: 'SET_TESTS_LIST',
    list
});

export const getTests = (event) => {
    const word = event.target.value;
    return async (dispatch, getState) => {
        try {
            dispatch(setTestInput(word));
            dispatch(setTestsLoading(true));
            const res = await API.get(`/v1/tests?key=${word}`);
            dispatch(setTestsLoading(false));
            dispatch(setTestsList(res.data));
        } catch (err) {
            dispatch(setTestsLoading(false));
            console.log(err);
        }
    }
}

export const setChosenTest = (obj) => ({
    type: 'SET_CHOSEN_TEST_FEE',
    obj
});

export const setImfeesList = (list) => ({
    type: 'SET_IMFEES_LIST',
    list
});

export const setTest = (event) => {
    const index = Number(event.target.id);
    return async (dispatch, getState) => {
        const list = getState().testList;
        dispatch(setChosenTest(list[index]));
        dispatch(setTestInput(list[index].code));
        dispatch(setTestsList([]));
        const res = await API.get(`/v1/get-imfees?code=${list[index].code}`);
        dispatch(setImfeesList(res.data));
    }
}

export const setCptsInput = (text) => ({
    type: 'SET_CPTS_INPUT',
    text
});

export const setCptsLoading = (bool) => ({
    type: 'IS_CPTS_LOAD',
    bool
});

export const setCptsList = (list) => ({
    type: 'SET_CPTS_LIST',
    list
});

export const getCpts = (event) => {
    const word = event.target.value;
    return async (dispatch, getState) => {
        try {
            dispatch(setCptsInput(word));
            dispatch(setCptsLoading(true));
            const res = await API.get(`/v1/get-cpts?key=${word}`);
            dispatch(setCptsLoading(false));
            dispatch(setCptsList(res.data));
        } catch (err) {
            dispatch(setCptsLoading(false));
            console.log(err);
        }
    }
}

export const setChosenCpt = (obj) => ({
    type: 'SET_CHOSEN_CPT_FEE',
    obj
});

export const addCptToList = (obj) => ({
    type: 'ADD_CPT_TO_LIST',
    obj
});

export const changeDesc = (e) => ({
    type: 'CHANGE_DESC',
    index: Number(e.target.id),
    text: e.target.value,
});

export const changeUnit = (e) => ({
    type: 'CHANGE_UNIT',
    index: Number(e.target.id),
    text: e.target.value,
});

export const changeModif = (e) => ({
    type: 'CHANGE_MODIF',
    index: Number(e.target.id),
    text: e.target.value,
});

export const delCpt = (e) => ({
    type: 'DEL_CPT_FEE',
    index: Number(e.target.id),
});

export const setCpt = (event) => {
    const index = Number(event.target.id);
    return async (dispatch, getState) => {
        try {
            const list = getState().cptList;
            const chosenTest = getState().test;
            dispatch(setCptsInput(""));
            dispatch(setChosenCpt(list[index]));
            dispatch(setCptsList([]));
            dispatch(addCptToList({
                testCode: chosenTest.code, 
                cptCode: list[index].code,
                testDescription: chosenTest.description,
                expected: list[index].fee,
                feeAmount: list[index].fee * 3,
            }));
        } catch (err) {
            dispatch(setCptsLoading(false));
            console.log(err);
        }
    }
}

export const saveCpts = () => {
    return async (dispatch, getState) => {
        try {
            const imfeesList = getState().imfeesList;
            for (let i = 0; i < imfeesList.length; i++) {
                if (!imfeesList[i].units) {
                    dispatch(showNotification(`One ot more "Units" fields are empty...`, `notification-show`));
                    return;
                }
            }
            await API.post(`/v1/save-cpts`, imfeesList);
            dispatch(showNotification(`Saved...`, `notification-show notification-green`));
        } catch (err) {
            dispatch(showNotification(`Error...`, `notification-show`));
            dispatch(setCptsLoading(false));
            console.log(err);
        }
    }
}