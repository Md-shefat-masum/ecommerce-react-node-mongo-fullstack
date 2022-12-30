import { useContext } from 'react'
import { FrontendContext } from '../contexts/FrontendContext';

function useFrontendContext() {
    return useContext(FrontendContext);
}

export default useFrontendContext