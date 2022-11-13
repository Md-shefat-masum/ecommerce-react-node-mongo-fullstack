import React, { createContext, useState } from 'react'

export const SettingContext = createContext(null);

function SettingContextProvider({ children }) {
    const [setting, setSetting] = useState({
        theme_color: 'light',
        header_style: 1,
        footer_style: 2,  
    })

    function change_setting(property, value) {
        setting[property] = value;
        setSetting({...setting});
    }

    const value = {
        setting,
        change_setting
    }

    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    )
}

export default SettingContextProvider