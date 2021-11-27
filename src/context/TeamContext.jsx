import React, { useState } from 'react';

//we create the context
export const TeamContext = React.createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]);
    const [render, setRender] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <TeamContext.Provider value={{
            setTeam,
            team,
            setRender,
            render,
            setCharacters,
            characters,
            setLoading,
            loading
        }}>
            {children}
        </TeamContext.Provider>
    )

}
