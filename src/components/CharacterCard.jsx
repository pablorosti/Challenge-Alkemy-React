import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { TeamContext } from '../context/TeamContext';
import { MessageError } from './MessageError';
import { Toaster, toast } from 'react-hot-toast';
import { validateAddCharacter } from '../functions/validateAddCharacter';
import { validateAlignment } from '../functions/validateAlignment';

export const CharacterCard = React.memo((props) => {
    const { team, setTeam, setRender, render, setCantBad, cantBad, setCantGood, cantGood } = useContext(TeamContext);
    const [error, setError] = useState(false)

    const handleTeamClick = () => {
        if (team.length === 0) {
            const message = validateAlignment(props, team, cantBad, cantGood, setCantBad, setTeam, setCantGood)
            toast('¡Personaje agregado al equipo!');
            return;
        }
        else if (team.length > 0) {
            const result = validateAddCharacter(team, props);
            if (result === undefined) {
                const message = validateAlignment(props, team, cantBad, cantGood, setCantBad, setTeam, setCantGood)
                if (message !== undefined) {
                    toast(message);
                    return;
                }
                toast("No puede agregar mas de 3 personajes de la misma alineación");
            } else {
                setError(true);
                return;
            }
        }
    }

    //Eliminamos el personaje del equipo
    const handleTeamDeleteClick = () => {
        const character = team.find(char => char.id === props.id)
        const index = team.indexOf(character);
        team.splice(index, 1);
        toast('¡Personaje eliminado!');
        setRender(!render);
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#13a70e',
                        color: '#fff',
                    },
                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="card mt-2 mb-2 shadow-lg bg-body rounded" >
                <img src={props.image.url} className="card-img-top" alt="imagen" style={{ height: "300px" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                {
                    props.power
                        ? <ul className="list-group list-group-flush">
                            <li className="list-group-item">Combate: {props.powerstats.combat}</li>
                            <li className="list-group-item">Durabilidad: {props.powerstats.durability}</li>
                            <li className="list-group-item">Inteligencia: {props.powerstats.intelligence}</li>
                            <li className="list-group-item">Poder: {props.powerstats.power}</li>
                            <li className="list-group-item">Velocidad: {props.powerstats.speed}</li>
                            <li className="list-group-item">Fuerza: {props.powerstats.strength}</li>
                        </ul>
                        : null
                }

                {
                    props?.delete
                        ? <div className="card-body">
                            <Link to={`character/${props.id}`} className='btn btn-sm btn-primary'>Más info</Link>
                            <button className='btn btn-sm btn-danger m-1' onClick={handleTeamDeleteClick}>Eliminar</button>
                        </div>
                        : <div className="card-body">
                            <Link to={`character/${props.id}`} className='btn btn-sm btn-primary'>Más info</Link>
                            <button className='btn btn-sm btn-success m-1' onClick={handleTeamClick}>Agregar al equipo</button>
                        </div>
                }
                {
                    error ? <MessageError title='Este personaje ya fue agregado' /> : null
                }

            </div>
        </>
    )
})