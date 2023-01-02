import React, { useReducer } from 'react'
import { createContext } from 'react'
import httpRequest from '../hooks/httpRequest';
import UseLocalStorageGet from '../hooks/UseLocalStorageGet';
import UseLocalStorageSet from '../hooks/UseLocalStorageSet';

const saveCart = async (dispatch, type, payload) => {
    await dispatch({ type, payload })
    httpRequest('/cart/create', 'POST', { carts: UseLocalStorageGet('carts') })
        .then(({ status }) => {
            status === 200 &&
                console.log('server cart updated');
        })
}

const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { carts, total_cart_amount, wishList, showAlert, showModal } = tempState;
    let user_id = window.localStorage.getItem('user_id');

    switch (type) {
        case 'loadCart':
            tempState.carts = UseLocalStorageGet('carts') || [];
            return tempState;
        case 'insertCart':
            const { _id, price, discount, discount_price, title, thumb_image } = payload.product;
            let qty = 1;

            let product = carts.find(i => i.product_id == _id);
            product ? qty = product.qty++ : qty = 1;

            !product &&
                carts.unshift({ user_id, product_id: _id, price, discount, discount_price, title, thumb_image, qty });

            tempState.total_cart_amount = carts.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : total += i.price * i.qty;
            }, 0)

            UseLocalStorageSet('carts', carts);
            window.s_alert('product added to cart list');
            return tempState

        case 'update_cart_qty':
            console.log(payload);
            carts[payload.index].qty = payload.qty

            tempState.total_cart_amount = carts.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : total += i.price * i.qty;
            }, 0)

            UseLocalStorageSet('carts', carts);
            window.s_alert('cart quantity updated');
            return tempState

        case 'removeCart':
            carts.splice(payload.index, 1);
            tempState.total_cart_amount = carts.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : total += i.price * i.qty;
            }, 0)

            UseLocalStorageSet('carts', carts);
            return tempState

        case 'toggleAlert':
            tempState.showAlert = !showAlert;
            return tempState

        default:
            return state;
    }
}


export const FrontendContext = createContext({});
function FrontendContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducers, {
        carts: [],
        total_cart_amount: 0,
        wishList: [],
        showAlert: false,
        showModal: false,
    })

    const thunkDispatch = ({ fn, type, payload }) => {
        if (fn == 'async') {
            eval(payload.method)(dispatch, type, payload)
        } else {
            dispatch({ type, payload })
        }
    }

    return (
        <FrontendContext.Provider value={{ state, dispatch: thunkDispatch }}>
            {children}
        </FrontendContext.Provider>
    )
}

export default FrontendContextProvider