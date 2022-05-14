
const conectarRegistro = (email, password) => {
    return fetch('http://localhost:4000/api/create',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
}

const conectarSesion = (email, password ) => {
    return fetch('http://localhost:4000/api/login',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
}

export {
    conectarRegistro,
    conectarSesion
}