import React, { useState, Fragment, useEffect } from 'react';
import Search from './components/Search';
// import DetailTeam from './components/DetailTeam';
import ResultsSearch from './components/ResultsSearch';
import Team from './components/Team';


export default function Home() {

    const [token, setToken] = useState(false)
    const [heroes, setHeroes] = useState([])
    // estado de prueba solo para el heroe
    const [hero, setHero] = useState({})
    // salvar heroe
    const [saveHero, setSaveHero] = useState([])
    // powerstats
    // const [powerstats, setPowerstats] =useState({
    //     name: '',
    //     id: '',
    //     powerstats: '',
    //     biography: '',
    //     appearance: '',
    //     work: '',
    //     connections: '',
    //     image: ''
    // })



    const getTokenLocalStorge = () => {
        const authentication = localStorage.getItem("token")
        if (authentication) setToken(true)
    }

    const agregarHeros = heroesResult => {
        setHeroes([
            ...heroes,
            heroesResult
        ]);
    }

    // prueba solo para mostar eñ heroe
    const agrgarHero = hero => {
        setHero([
            hero
        ])
    }

    useEffect(() => {
        getTokenLocalStorge();
    }, [])

    // console.log(heroes)

    // salvar heroe
    // const handleSaveHero = (id) => {
    //     const heroTeam = hero.filter(hero => hero.id !== id)
    //     setSaveHero({
    //         ...saveHero,
    //         heroTeam
    //     })
    // }

    const handleSaveHero = () => {
        // const heroTeam = hero.filter(hero => hero.id !== id)
        setSaveHero([
            ...saveHero,
            { hero }
        ])


    }


    return (
        <Fragment>
            {token ? (
                <div className="container">
                    <header className="col-lg-6 mt-3">
                        <Team heroes={saveHero} />
                    </header>
                    <div>
                        <Search agregarHeros={agregarHeros} agregarHero={agrgarHero} />
                    </div>
                    <div className="mt-5">
                        {(hero) ? (<ResultsSearch heroes={heroes} hero={hero} handleSaveHero={handleSaveHero} />) : <p>No hay resultados</p>}
                    </div>
                </div>)
                : <p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
