import React, { useCallback, useReducer } from 'react'
import { createContext } from 'react'

const fakeApi = (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
        }, 2000);
    })
}

const asyncInc = async (dispatch, params) => {
    let data = await fakeApi(params);
    dispatch({ type: 'increment', payload: data })
}

const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            console.log(action.payload);
            return { count: state.count + 1 };
        case 'decrement':
            console.log(action.payload);
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error();
    }
}

export const FrontendContext = createContext({});
function FrontendContextProvider({ children }) {
    const [frontend, dispatchFrontend] = useReducer(reducer, initialState)

    const thunkDispatch = useCallback(
        (action) => {
            // console.log(action);
            if (action.type === 'async') {
                return eval(action.fn)(dispatchFrontend, action.payload || {});
            } else {
                dispatchFrontend({
                    type: action.type,
                    payload: action.payload || {},
                })
            }
        },
        []
    );
    
    return (
        <FrontendContext.Provider value={{ frontend, dispatchFrontend: thunkDispatch }}>
            {children}
        </FrontendContext.Provider>
    )
}

export default FrontendContextProvider