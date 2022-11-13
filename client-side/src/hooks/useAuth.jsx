import { useState } from 'react'

function useAuth() {
    const [authStatus, setAuthStatus] = useState(false);

    function login() {
        setAuthStatus(true);
        console.log('login');
    }

    function logout() {
        setAuthStatus(false);
        console.log('logout');
    }

    return {
        authStatus, 
        logout,
        login,
    }
}

export default useAuth