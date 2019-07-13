import { setTestInput, setChosenTest, setImfeesList, setChosenCpt } from './Fee';


export const setOption = (obj) => {
    return async (dispatch, getState) => {
        switch (obj.id) {
            case `billSched`:
                return {
                    type: 'SET_DROP_DOWN_OPTION_INS',
                    obj
                }

            case `testCategory`:
                return {
                    type: 'SET_DROP_DOWN_OPTION_INS',
                    obj
                }

            case `billSchedule`:
                dispatch(setTestInput(""));
                dispatch(setChosenTest({}));
                dispatch(setImfeesList([]));
                dispatch(setChosenCpt({}));
                dispatch(setOpt(obj));
                break;

            case `feeSchedule`:
                dispatch(updateCpts(obj));
                dispatch(setOpt(obj));
                break;


            default: dispatch(setOpt(obj));
        }
    }
};

export const updateCpts = (obj) => ({
    type: 'UPDATE_IO_FEES',
    obj
});

export const setOpt = (obj) => ({
    type: 'SET_DROP_DOWN_OPTION',
    obj
});

export const showDropDown = (obj) => ({
    type: 'SHOW_DROP_DOWN',
    obj
});

