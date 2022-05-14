import React from 'react'
import { useState } from 'react'
import { conectarRegistro, conectarSesion } from '../fetch/connect';

export const Login = () => {

    
    const [ registro, setRegistro ] = useState({
        emailRegistro: '',
        passwordRegistro: '',
    })
    const {  emailRegistro, passwordRegistro } = registro;

    const [correcto, setCorrecto] = useState(undefined)


    const [ sesion, setSesion ] = useState({
        emailSesion: '',
        passwordSesion: '',
    })
    const {  emailSesion, passwordSesion } = sesion;




    const handleRegister = async (e) => {
        e.preventDefault()

        try {    
            const data = await conectarRegistro(emailRegistro, passwordRegistro);
            const body = await data.json()
            if (body.ok){
                alert(`Usuario ${ body.usuario } registrado`)
            }
            else {
                alert('error al registrar')
            }
        } catch (error) {
            console.log(error)
        }

    
    }
    const handleLogin = async (e) => {
        e.preventDefault()


        try {    
            const data = await conectarSesion(emailSesion, passwordSesion);
            const body = await data.json();
            if (body.ok){
                setCorrecto(true)
            }
            else {
                setCorrecto(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    // changes
    // e.target
    const changeRegistro = ({ target }) => {
        setRegistro({
            ...registro,
            [ target.name ]: target.value
        })
    }

    const changeSesion = ({ target }) => {
        setSesion({
            ...sesion,
            [ target.name ]: target.value
        })
    }


    return (
        <>
            <form style={{width: '90%', alignItems: 'center', justifyContent: 'center'}} onSubmit={ handleRegister }>
                <h1>Registro</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={ changeRegistro } name="emailRegistro" value={ emailRegistro } />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={ changeRegistro } name="passwordRegistro" value={ passwordRegistro } />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <form style={{width: '90%', alignItems: 'center', justifyContent: 'center'}} onSubmit={ handleLogin }>
                <br />
                <br />
                <h1>Iniciar Sesión</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={ changeSesion } name="emailSesion" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={ changeSesion } name="passwordSesion" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                {
                    (correcto) ? 
                    <div className="alert alert-primary" role="alert">
                           Se ha iniciado sesion correctamente
                    </div> 
                    :
                    (correcto !== undefined) && 
                    <div className="alert alert-danger" role="alert">
                        Error al iniciar sesion
                    </div>
                }
            </div>
        </>
  )
}
