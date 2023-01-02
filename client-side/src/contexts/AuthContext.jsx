import React, { createContext, useEffect, useState } from 'react'
import httpRequest from '../hooks/httpRequest';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [checkAuth, setCheckAuth] = useState(false)

    async function chek_user(params) {
        let res = await httpRequest('/user/check-user');
        let status = await res.status;
        if(status === 200){
            setCheckAuth({
                isAuth: true,
                token: window.localStorage.getItem('token'),
                data: {
                    user_id: res.data.user_id,
                    email: res.data.email,
                    username: res.data.username,
                    role: res.data.role,
                }
            })
            window.localStorage.setItem('user_id',res.data.user_id);
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
        data: checkAuth.data,
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