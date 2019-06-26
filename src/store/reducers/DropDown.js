export const dropdownStatus = (state = {}, action) => {
    let newState;
    if (action.type === `SHOW_DROP_DOWN`) {
        switch (action.obj.id) {
            case `billSchedule`:
                newState = JSON.parse(JSON.stringify(state));
                newState.billSchedule = action.obj.status;
                return newState;

            default: return state;
        }
    } else {
        return state;
    }
}

export const dropdownOption = (state = {}, action) => {
    let newState;
    if (action.type === `SET_DROP_DOWN_OPTION`) {
        switch (action.obj.id) {
            case `billSchedule`:
                newState = JSON.parse(JSON.stringify(state));
                newState.billSchedule = action.obj.option;
                return newState;
            
            default: return newState;
        }
    } else {
        return state;
    }
}