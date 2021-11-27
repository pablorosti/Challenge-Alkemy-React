import React, { useContext, useState } from 'react'
import { TeamContext } from '../context/TeamContext';
import { getCharacters } from '../functions/getCharacters';


export const InputSearch = () => {
    const [search, setSearch] = useState('');
    const { setCharacters, setLoading } = useContext(TeamContext);

    const handleClick = async () => {
        setLoading(true);
        const result = await getCharacters(search);
        setCharacters(result);
        setLoading(false);
    }

    return (
        <div className="input-group mb-3 mt-3">
            <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Nombre"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleClick}
            >Buscar</button>
        </div>
    )
}
