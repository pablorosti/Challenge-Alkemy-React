import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { TeamContext } from '../context/TeamContext';
import { MessageError } from './MessageError';
import { Toaster, toast } from 'react-hot-toast';

export const CharacterCard = React.memo((props) => {

    const { team, setTeam, setRender, render } = useContext(TeamContext);
    const [error, setError] = useState(false)

    const validateArray = (array) => {
        return array.find(e => e.id === props.id);

    }

    const handleTeamClick = () => {
        if (team.length === 0) {
            setTeam([...team, props]);
            toast('¡Personaje agregado al equipo!');
            return;
        }
        else if (team.length > 0) {
            const result = validateArray(team);
            if (result === undefined) {
                if (props.biography.alignment === "bad" && team.length < 6) {
                    setTeam([...team, props]);
                    toast('¡Personaje agregado al equipo!');
                    return;
                } else if (props.biography.alignment === "good" && team.length < 6) {
                    setTeam([...team, props]);
                    toast('¡Personaje agregado al equipo!');
                    return;
                }
            } else {
                setError(true);
                return;
            }
        }
    }

    // //Agregamos los personajes al equipo y validamos...
    // const handleTeamClick = () => {
    //     if (team.length === 0) {
    //         if (props.biography.alignment === "bad" && team.length < 6) {
    //             setTeam([...team, props]);
    //             toast('¡Personaje agregado al equipo!');
    //             return;
    //         } else if (props.biography.alignment === "good" && team.length < 6) {
    //             setTeam([...team, props]);
    //             toast('¡Personaje agregado al equipo!');
    //             return;
    //         }
    //     }
    //     if (team.length > 0) {
    //         team?.forEach(ch => {
    //             if (ch.id === props.id) {
    //                 setError(true);
    //                 return false;

    //             } else {
    //                 console.log('Nos metimos al else')
    //                 if (props.biography.alignment === "bad" && team.length < 6) {
    //                     setTeam([...team, props]);
    //                     toast('¡Personaje agregado al equipo!');
    //                     console.log('Nos metimos al primer if')
    //                     return;
    //                 } else if (props.biography.alignment === "good" && team.length < 6) {
    //                     setTeam([...team, props]);
    //                     toast('¡Personaje agregado al equipo!');
    //                     console.log('Se metio en el else if')
    //                     return;
    //                 }
    //             }
    //         })
    //     }
    // }

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