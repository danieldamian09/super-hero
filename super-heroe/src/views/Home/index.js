import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './components/Search';
import ResultsSearch from './components/ResultsSearch';
import Team from './components/Team';
import Navbar from './components/Navbar';
import TeamDetail from './components/TeamDetail';
import Mesage from './components/Mesage';


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
                <div className="container mt-3">
                    <h1>Super-Hero App</h1>
                    <header className="col-lg-8 mt-3 mx-auto">
                        <Search agregarHero={agregarHero} />
                        {(hero) ? (<ResultsSearch hero={hero} saveHero={saveHero} handleSaveHero={handleSaveHero} />) : <Mesage text="no hay resultados" />}
                    </header>
                    <div className="col-lg-8 mt-3 mx-auto">
                        {(saveHero) ? <Team saveHero={saveHero} /> : null}
                    </div>
                        <div className="row w-80 mx-auto">
                        {(saveHero.length) ? <h2 className="text-light text-center" id="equipo">Equipo</h2> : null}
                            <TeamDetail saveHero={saveHero} setSaveHero={setSaveHero} />
                        </div>
                </div>)
                : <Mesage text="Por favor Iniciar Session" />}
        </Fragment>
    )
}
