import React, { useState, Fragment, useEffect } from 'react';
import Search from './components/Search';
import DetailTeam from './components/DetailTeam';
import ResultsSearch from './components/ResultsSearch';


export default function Home() {

    const [token, setToken] = useState(false)
    const [heroes, setHeroes] = useState([])

    const getTokenLocalStorge = () => {
        const authentication = localStorage.getItem("token")
        if(authentication) setToken(true)
    }

    const agregarHero = heroesResult => {
        setHeroes([
            ...heroes,
            heroesResult
        ]);
    }

    useEffect(() => {
        getTokenLocalStorge();
    }, [])

    console.log(heroes)

    return (
        <Fragment>
            {token ? (
                <div className="container">
                    <header className="col-lg-6 mt-3">
                        <DetailTeam heroes={heroes} />
                    </header>
                    <div>
                        <Search agregarHero={agregarHero} />
                    </div>
                    <div className="mt-5">
                        <ResultsSearch heroes={heroes}/>
                    </div>
                </div>)
            :<p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
