import React, { useState } from 'react'
import HeroesContext from "./index"
import apiCall from "../../api"

export default function HeroesProvaider({ children }) {

    const [heroes, setHeroes] = useState([])
    const [hero, setHero] = useState("")

    const getHeroes = async () => {

        try {
            const apiKey = `10225291220969322`
            const heroesResult = await apiCall({ url: `https://www.superheroapi.com/api.php/${apiKey}/search/${hero}`})
            setHeroes(heroesResult)
        } catch (error) {
            setHeroes([]);
            
        }

    }

    // console.log(hero)

    return (
        <HeroesContext.Provider value={{ getHeroes, heroes, setHero }} >
            {children}
        </HeroesContext.Provider>
    )
}
