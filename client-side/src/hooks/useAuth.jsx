import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const IsAuth = () => window.localStorage.getItem('token');

function UseAuth() {
    return useContext(AuthContext);
    // const [authStatus, setAuthStatus] = useState(false);

    // function login() {
    //     setAuthStatus(true);
    //     console.log('login');
    // }

    // function logout() {
    //     setAuthStatus(false);
    //     console.log('logout');
    // }

    // return {
    //     authStatus, 
    //     logout,
    //     login,
    // }
}

export default UseAuth