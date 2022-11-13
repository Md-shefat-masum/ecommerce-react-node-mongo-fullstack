import React, { createContext, useEffect, useState } from 'react'
import httpRequest from '../hooks/httpRequest';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [data, setData] = useState({
        first_name: 'mr kalam',
        last_name: 'khan',
    })

    const [checkAuth, setCheckAuth] = useState(false)

    function change_data(property, value) {
        data[property] = value;
        setData({ ...data });
    }

    async function chek_user(params) {
        let res = await httpRequest('/user/check-user');
        let status = await res.status;
        if(status === 200){
            setCheckAuth({
                isAuth: true,
                token: window.localStorage.getItem('token'),
                data: {
                    email: res.data.email,
                    username: res.data.username,
                    role: res.data.role,
                }
            })
        }else{
            setCheckAuth(false)
        }
    }

    useEffect(() => {
        chek_user();
    }, [])

    const logout = () =>{
        setCheckAuth(false);
        window.localStorage.removeItem('token');
    }
    

    const value = {
        data,
        change_data,
        checkAuth, 
        setCheckAuth,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider