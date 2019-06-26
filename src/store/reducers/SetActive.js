export const active = (state = `notification`, action) => {
    switch (action.type) {
        case `SET_ACTIVE`:
            return action.bool

        default: return state;
    }
}