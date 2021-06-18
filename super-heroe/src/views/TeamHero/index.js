import React, { useState, Fragment, useEffect } from 'react';

export default function TeamHero() {

    const[token, setToken] = useState(false)

    const getTokenLocalStorge = () => {
        const authentication = localStorage.getItem("token")
        if (authentication) setToken(true)
    }

    useEffect(() => {
        getTokenLocalStorge();
    }, [])


    return (
        <Fragment>
            {token ? (
                <div>
                    <h2>Detalle de los 6 integrantes del equipo</h2>
                </div>)
                : <p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
