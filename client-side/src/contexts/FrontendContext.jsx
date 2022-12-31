import React, { useReducer } from 'react'
import { createContext } from 'react'

const saveCart = (dispatch, type, payload) => {
    fetch('http://localhost:5001/test')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch({ type, payload })
        })
}

const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { carts, total_cart_amount, wishList, showAlert, showModal } = tempState;

    switch (type) {
        case 'insertCart':
            const { _id, price, discount_price, title, thumb_image } = payload.product;
            let qty = 1;

            let product = carts.find(i => i._id == _id);
            product ? qty = product.qty++ : qty = 1;

            !product &&
                carts.unshift({ _id, price, discount_price, title, thumb_image, qty });

            tempState.total_cart_amount = carts.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : total += i.price * i.qty;
            }, 0)

            window.s_alert('product added to cart list');
            return tempState

        case 'removeCart':
            carts.splice(payload.index, 1);
            tempState.total_cart_amount = carts.reduce((total, i) => {
                return i.discount_price ? total += i.discount_price * i.qty : total += i.price * i.qty;
            }, 0)
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
            console.log('async called', payload);
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