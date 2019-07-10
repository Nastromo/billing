export const setOption = (obj) => {
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

        default: return ({
            type: 'SET_DROP_DOWN_OPTION',
            obj
        })
    }
};

export const showDropDown = (obj) => ({
    type: 'SHOW_DROP_DOWN',
    obj
});

