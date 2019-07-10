export const diagLoading = (state = true, action) => {
    switch (action.type) {
        case `SET_DIAG_LOAD`:
            return action.bool

        default: return state;
    }
}

export const diagErrored = (state = false, action) => {
    switch (action.type) {
        case `SET_DIAG_ERROR`:
            return action.bool

        default: return state;
    }
}

export const diags = (state = [], action) => {
    switch (action.type) {
        case `SET_DIAG_LIST`:
            return action.list

        default: return state;
    }
}