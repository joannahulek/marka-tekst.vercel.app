import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NavContextProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState('#about');

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setActiveTab(hash);
        }
    }, []);

    return (
        <NavContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = (): NavContextProps => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};
