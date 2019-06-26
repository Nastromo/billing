export const client = (state = ``, action) => {
    switch (action.type) {
        case `SET_CLIENT`:
            return action.text

        default: return state;
    }
}