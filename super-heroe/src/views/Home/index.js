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
    //     id: '',
    //     name: '',
    //     intelligence: '',
    //     strength: '',
    //     speed: '',
    //     durability: '',
    //     power: '',
    //     combat: '',
    //     height: '',
    //     weight: '',
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
        // console.log(hero)

    //     if(saveHero && hero){
    //     const id = saveHero[0].hero[0].id
    //     const name = saveHero[0].hero[0].name
    //     const intelligence = saveHero[0].hero[0].powerstats.intelligence
    //     const strength = saveHero[0].hero[0].powerstats.strength
    //     const speed = saveHero[0].hero[0].powerstats.speed
    //     const durability = saveHero[0].hero[0].powerstats.durability
    //     const power = saveHero[0].hero[0].powerstats.power
    //     const combat = saveHero[0].hero[0].powerstats.combat
    //     const height = saveHero[0].hero[0].appearance.height[1]
    //     const weight = saveHero[0].hero[0].appearance.weight[1]

    //     setPowerstats({
    //         ...powerstats,
    //         id,
    //         name,
    //         intelligence,
    //         strength,
    //         speed,
    //         durability,
    //         power,
    //         combat,
    //         height,
    //         weight
    //     })

    // }

    }

    // console.log(heroes)
    // console.log(saveHero)
    // console.log(saveHero)

    
    return (
        <Fragment>
            {token ? (
                <div className="container">
                    <header className="col-lg-12 mt-3">
                        {(heroes.length ) ? <Team heroes={saveHero} setSaveHero={setSaveHero}/> : null}
                    </header>
                    <div>
                        <Search agregarHeros={agregarHeros} agregarHero={agrgarHero}  />
                    </div>
                    <div className="mt-5">
                        {(hero) ? (<ResultsSearch heroes={heroes} hero={hero} handleSaveHero={handleSaveHero} />) : <p>No hay resultados</p>}
                    </div>
                </div>)
                : <p>Por favor Iniciar Session</p>}
        </Fragment>
    )
}
