export const isTestLoading = (state = false, action) => {
    switch (action.type) {
        case `SET_TEST_LOADING`:
            return action.bool;

        default: return state;
    }
}

export const testInput = (state = "", action) => {
    switch (action.type) {
        case `SET_TEST_INPUT`:
            return action.text;

        default: return state;
    }
}

export const testList = (state = [], action) => {
    switch (action.type) {
        case `SET_TESTS_LIST`:
            return action.list;

        default: return state;
    }
}

export const test = (state = {}, action) => {
    switch (action.type) {
        case `SET_CHOSEN_TEST_FEE`:
            return action.obj;

        default: return state;
    }
}

export const isCptLoading = (state = false, action) => {
    switch (action.type) {
        case `IS_CPTS_LOAD`:
            return action.bool;

        default: return state;
    }
}

export const cptCode = (state = "", action) => {
    switch (action.type) {
        case `SET_CPTS_INPUT`:
            return action.text;

        default: return state;
    }
}

export const cptList = (state = [], action) => {
    switch (action.type) {
        case `SET_CPTS_LIST`:
            return action.list;

        default: return state;
    }
}

export const chosenCptFee = (state = {}, action) => {
    switch (action.type) {
        case `SET_CHOSEN_CPT_FEE`:
            return action.obj;

        default: return state;
    }
}

export const imfeesList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `SET_IMFEES_LIST`:
            return action.list;

        case `ADD_CPT_TO_LIST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.obj);
            return newState;

        case `CHANGE_DESC`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.index].testDescription = action.text;
            return newState;

        case `CHANGE_UNIT`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.index].units = action.text;
            return newState;

        case `CHANGE_MODIF`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.index].modifier = action.text;
            return newState;

            case `DEL_CPT_FEE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

            

        default: return state;
    }
}





