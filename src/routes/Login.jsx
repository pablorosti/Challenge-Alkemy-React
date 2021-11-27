import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MessageError } from '../components/MessageError';
import { signIn } from '../functions/signIn';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Correo electónico no valido').required('Ingrese su email'),
            password: Yup.string().required('Ingrese una contraseña')
        }),
        onSubmit: async (formData) => {
            const { ...data } = formData;
            setLoading(true);
            const result = await signIn(data);

            //Si obtenemos el token lo guardamos en el localStorage y redirigimos a la pagina home
            if (Object.keys(result).length > 0) {
                localStorage.setItem("token", result.token);
                setLoading(false);
                navigate('/');
            } else {
                toast('¡Error, el email o contraseña son incorrectos!');
                setLoading(false)
            };
        },
    });

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
                        background: '#a70e0e',
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
            <div className='container screen-login'>
                <div className='abs-center'>
                    <form className='border p-4 bg-login' onSubmit={formik.handleSubmit}>
                        <div className='text-center m-4'>
                            <i className="fas fa-sign-in-alt icon"></i>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                            <input
                                type="email"
                                className="form-control form-control-sm "
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='email'
                                onChange={formik.handleChange}
                            />
                        </div>
                        <MessageError title={formik.errors.email} />

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                placeholder="Contraseña"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='password'
                                onChange={formik.handleChange}
                            />
                        </div>
                        <MessageError title={formik.errors.password} />
                        {
                            loading
                                ? <button className="btn btn-sm btn-primary w-100" type="submit" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Ingresar
                                </button>
                                : <button className='btn btn-sm btn-primary w-100' type='submit'>Ingresar</button>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
