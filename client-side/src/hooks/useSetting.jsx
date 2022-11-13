import { useContext } from 'react'
import { SettingContext } from '../contexts/SettingContext'

function useSetting() {
    return useContext(SettingContext);
}

export default useSetting