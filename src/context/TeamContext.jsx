import React, { useState } from 'react';

//we create the context
export const TeamContext = React.createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]);
    const [render, setRender] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cantBad, setCantBad] = useState(0);
    const [cantGood, setCantGood] = useState(0);

    return (
        <TeamContext.Provider value={{
            setTeam,
            team,
            setRender,
            render,
            setCharacters,
            characters,
            setLoading,
            loading,
            setCantBad,
            cantBad,
            setCantGood,
            cantGood
        }}>
            {children}
        </TeamContext.Provider>
    )

}
