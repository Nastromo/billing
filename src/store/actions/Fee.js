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
        const billOpt = getState().dropdownOption.billSchedule;
        dispatch(setChosenTest(list[index]));
        dispatch(setTestInput(list[index].code));
        dispatch(setTestsList([]));
        let res;
        switch (billOpt) {
            case `Insurance - Medicare`:
                res = await API.get(`/v1/get-imfees?code=${list[index].code}`);
                dispatch(setImfeesList(res.data));
                break;
            case `Insurance - Other`:
                res = await API.get(`/v1/get-iofees?code=${list[index].code}`);
                dispatch(setImfeesList(res.data));
                break;
            case `Patient`:
                res = await API.get(`/v1/get-patient?code=${list[index].code}`);
                break;
            default: break;
        }
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
        const list = getState().cptList;
        const chosenTest = getState().test;
        const billOpt = getState().dropdownOption.billSchedule;
        const feeSchedOpt = Number(getState().dropdownOption.feeSchedule);
        let mult = 0;
        switch (feeSchedOpt) {
            case 1:
                mult = 15;
                break;
            case 2:
                mult = 3;
                break;
            case 3:
                mult = 5;
                break;
            case 4:
                mult = 10;
                break;
            case 5:
                mult = 12;
                break;
            case 6:
                mult = 2;
                break;
            default: break;
        }

        dispatch(setCptsInput(""));
        dispatch(setChosenCpt(list[index]));
        dispatch(setCptsList([]));

        switch (billOpt) {
            case `Insurance - Medicare`:
                console.log(list[index].fee)
                dispatch(addCptToList({
                    testCode: chosenTest.code,
                    cptCode: list[index].code,
                    testDescription: chosenTest.description,
                    expected: list[index].fee,
                    feeAmount: list[index].fee * 3,
                }));
                break;
            case `Insurance - Other`:
                console.log(list[index].fee)
                dispatch(addCptToList({
                    testCode: chosenTest.code,
                    cptCode: list[index].code,
                    testDescription: chosenTest.description,
                    expected: list[index].fee,
                    feeAmount: list[index].fee * mult,
                }));
                break;
            case `Patient`:

                break;

            default: break;
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
            switch (getState().dropdownOption.billSchedule) {
                case `Insurance - Medicare`:
                    await API.post(`/v1/save-cpts`, {
                        code: getState().test.code,
                        list: imfeesList
                    });
                    dispatch(showNotification(`Saved...`, `notification-show notification-green`));
                    break;
                case `Insurance - Other`:
                    await API.post(`/v1/save-cpts-io`, {
                        code: getState().test.code,
                        list: imfeesList
                    });
                    dispatch(showNotification(`Saved...`, `notification-show notification-green`));
                    break;
                default: break;
            }

        } catch (err) {
            dispatch(showNotification(`Error...`, `notification-show`));
            dispatch(setCptsLoading(false));
            console.log(err);
        }
    }
}