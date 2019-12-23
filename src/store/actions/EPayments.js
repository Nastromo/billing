import API from '../../utils/Api';




export const setPayments = (list) => ({
    type: 'SET_E_PAYMENTS_LIST',
    list
});

export const getPayments = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/e-payments`);
            dispatch(setPayments(res.data));
            dispatch(showClientData(0));
            
        } catch (err) {
            console.log(err);
        }
    }
}

export const setClientData = (obj) => ({
    type: 'SET_E_CLIENT_DATA',
    obj
});

export const setPaySelected = (i) => ({
    type: 'SET_E_PAY_SELECTED',
    i
});


export const setPayment = (obj) => ({
    type: 'SET_PAYMENT',
    obj
});

export const showClientData = (i) => {
    return async (dispatch, getState) => {
        try {
            const payment = getState().epayments[i];
            dispatch(setPaySelected(i));
            dispatch(setPayment(payment));
            const res = await API.get(`/v1/e-client?id=${payment.clientId}`);
            dispatch(setClientData(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

