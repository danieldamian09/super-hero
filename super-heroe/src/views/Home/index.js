import React, { useState, Fragment, useEffect } from 'react';

export default function Home() {

    const [token, setToken] = useState(false)

    const getTokenLocalStorge = () => {
        const authentication = localStorage.getItem("token")
        if(authentication) setToken(true)
    }

    useEffect(() => {
        getTokenLocalStorge();
    }, [])

    return (
        <Fragment>
            {token ? (
            <div>
                <h2>Home</h2>
                <h3>Buscador</h3>
                <div>
                    <p>Resultado</p>
                </div>
            </div>)
            :<p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
