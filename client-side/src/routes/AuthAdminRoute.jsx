import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

function AuthAdminRoute({ children }) {
    const { checkAuth } = useContext(AuthContext);
    const location = useLocation();
    window.authPrevLink = location;
    
    return (
        checkAuth.isAuth && checkAuth.data.role === 'admin' ?
            { ...children }
            :
            <Navigate to={'/login'} />
    )
}

export default AuthAdminRoute