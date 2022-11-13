import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

function AuthRoute({ children }) {
    const { checkAuth } = useContext(AuthContext);
    const location = useLocation();
    window.authPrevLink = location;
    
    return (
        checkAuth.isAuth ?
            { ...children }
            :
            <Navigate to={'/login'} />
    )
}

export default AuthRoute