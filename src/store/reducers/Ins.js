export const insLoading = (state = false, action) => {
    switch (action.type) {
        case `SET_INS_LOAD`:
            return action.bool

        default: return state;
    }
}

export const insErrored = (state = false, action) => {
    switch (action.type) {
        case `SET_INS_ERROR`:
            return action.bool

        default: return state;
    }
}

export const insurances = (state = [], action) => {
    switch (action.type) {
        case `SET_INS`:
            return action.list

        default: return state;
    }
}

export const chosenIns = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_CHOSEN_INSURANCE`:
            return action.obj
        case `SET_INS_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.companyName = action.text;
            return newState;
        case `SET_INS_ADDRESS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.address = action.text;
            return newState;
        case `SET_INS_CITY`:
            newState = JSON.parse(JSON.stringify(state));
            newState.city = action.text;
            return newState;
        case `SET_INS_STATE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.state = action.text;
            return newState;
        case `SET_INS_ZIP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zip = action.text;
            return newState;
        case `SET_INS_PHONE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;
        case `SET_INS_NEIC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.neic = action.text;
            return newState;
        case `SET_INS_PROV`:
            newState = JSON.parse(JSON.stringify(state));
            newState.provider = action.text;
            return newState;
        case `SET_INS_REQUEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.requestCode = action.text;
            return newState;
        case `SET_INS_NOTES`:
            newState = JSON.parse(JSON.stringify(state));
            newState.notes = action.text;
            return newState;
        case `SET_DROP_DOWN_OPTION_INS`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `billSched`:
                    newState.billSchedule = action.obj.option;
                    return newState;
                case `testCategory`:
                    newState.testCategory = action.obj.option;
                    return newState;
                default: return newState;
            }

        default: return state;
    }
}

export const insSelected = (state = 0, action) => {
    switch (action.type) {
        case `SET_INSURANCE_ROW`:
            return action.index

        default: return state;
    }
}