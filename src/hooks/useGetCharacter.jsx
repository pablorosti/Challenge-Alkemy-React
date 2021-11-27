import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetCharacter = (id) => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const url = `https://superheroapi.com/api/3896683383777225/${id}`
        axios.get(url)
            .then(res => {
                const character = res.data;
                setCharacter(character)
            })
    }, [])

    return [character]
}