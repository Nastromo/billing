export const cpt = (state = [], action) => {
    switch (action.type) {
        case `SET_CPTS`:
            return action.list

        default: return state;
    }
}

export const cptLoading = (state = false, action) => {
    switch (action.type) {
        case `SET_CPTS_LOAD`:
            return action.bool

        default: return state;
    }
}

export const cptErrored = (state = false, action) => {
    switch (action.type) {
        case `SET_CPTS_ERROR`:
            return action.bool

        default: return state;
    }
}

export const selectedCpt = (state = 0, action) => {
    switch (action.type) {
        case `SET_SELECTED_CPT_ROW`:
            return action.index

        default: return state;
    }
}

export const chosenCpt = (state = {}, action) => {
    let newState;
    let diagList;
    switch (action.type) {
        case `SET_CHOSEN_CPT`:
            return action.obj
        case `SET_CPT_CODE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.code = action.text;
            return newState;
        case `SET_CPT_DESC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.description = action.text;
            return newState;
        case `SET_CPT_MOD`:
            newState = JSON.parse(JSON.stringify(state));
            newState.modifier = action.text;
            return newState;
        case `SET_CPT_FEE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.fee = action.text;
            return newState;
        case `DEL_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            diagList = JSON.parse(newState.diagnosis);
            diagList.splice(action.index, 1);
            newState.diagnosis = JSON.stringify(diagList);
            return newState;
        case `ADD_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            diagList = JSON.parse(newState.diagnosis ? newState.diagnosis : "[]");
            diagList.push({
                code: action.obj.code,
                desc: action.obj.description,
            });
            newState.diagnosis = JSON.stringify(diagList);
            return newState;
        default: return state;
    }
}