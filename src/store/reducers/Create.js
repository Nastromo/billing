export const createMode = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE`:
            return action.bool

        default: return state;
    }
}