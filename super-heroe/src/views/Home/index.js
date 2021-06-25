import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './components/Search';
import ResultsSearch from './components/ResultsSearch';
import Team from './components/Team';
import Navbar from './components/Navbar';


export default function Home() {

    const [token, setToken] = useState(false)
    const [hero, setHero] = useState({})
    const [saveHero, setSaveHero] = useState([])

    const history = useHistory();

    const getTokenLocalStorge = () => {
        const authentication = localStorage.getItem("token")
        if (authentication) setToken(true)
    }

    const agregarHero = hero => {
        setHero(
            hero
        )
    }

    useEffect(() => {
        getTokenLocalStorge();
    }, [])

    const handleSaveHero = () => {
        setSaveHero([
            ...saveHero,
            hero
        ])
    }

    const exit = () => {
        localStorage.removeItem("token");
        setToken(false)
        history.push("/")
    }

    return (
        <Fragment>
            <Navbar exit={exit} />
            {token ? (
                <div className="container">
                    <h1>Super-Hero App</h1>
                    <header className="col-lg-12 mt-3">
                        
                        {(saveHero) ? <Team saveHero={saveHero} setSaveHero={setSaveHero} /> : null}
                    </header>
                    <div>
                        <Search agregarHero={agregarHero} />
                    </div>
                    <div className="mt-5">
                        {(hero) ? (<ResultsSearch hero={hero} handleSaveHero={handleSaveHero} />) : <p>No hay resultados</p>}
                    </div>
                </div>)
                : <p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
