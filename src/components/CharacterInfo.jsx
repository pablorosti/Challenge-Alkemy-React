import React from 'react'
import { useParams } from 'react-router';
import { useGetCharacter } from '../hooks/useGetCharacter';
import { Spinner } from '../components/Spinner'
import { GoBack } from './GoBack';

export const CharacterInfo = () => {
    const { id } = useParams();
    const [result] = useGetCharacter(id);

    return (
        <div className='container'>
            {
                result.length === 0
                    ? <Spinner />
                    : <div className='row'>
                        <div className='col-md-6'>
                            <img src={result?.image?.url} className="img-fluid w-md-50 mt-4 mb-4" alt="..." />
                        </div>
                        <div className='col-md-6'>
                            <section className='mt-4'>
                                <p className='text-danger'>Peso: <span className='text-dark'>{result?.appearance?.weight[1]}</span></p>
                                <p className='text-danger'>Altura: <span className='text-dark'>{result?.appearance?.height[1]}</span></p>
                                <p className='text-danger'>Nombre: <span className='text-dark'>{result?.name}</span></p>
                                <p className='text-danger'>Alias: <span className='text-dark'>{result?.biography?.aliases?.map((name, i) => <li key={i}>{name}</li>)}</span></p>
                                <p className='text-danger'>Color de ojos: <span className='text-dark'>{result?.appearance['eye-color']}</span></p>
                                <p className='text-danger'>Color de cabello: <span className='text-dark'>{result?.appearance['hair-color']}</span></p>
                                <p className='text-danger'>Lugar de trabajo: <span className='text-dark'>{result?.work?.base}</span></p>
                            </section>
                            <GoBack />
                        </div>
                    </div>
            }
        </div>
    )
}
