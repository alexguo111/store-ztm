import { createContext, useState } from "react";

export const DropdownContext = createContext({});

export const DropdownProvider = ({ children }) => {

    const [currentStat, setCurrentStat] = useState(false);
    const value = { currentStat, setCurrentStat };

    return (
        <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
    )
}