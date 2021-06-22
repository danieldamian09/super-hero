export default function DetailTeam(heroe) {

    // if(!heroe.length) return null;

    // const heroeTeamReulst = saveHero.heroes[0]
    // console.log(heroeTeamReulst)

    // console.log(saveHero.heroes[0])
    // console.log(saveHero.heroes[1].powerstats)

    // const prueba = saveHero.heroes.map(hero => hero)
    // console.log(prueba)
    

    // if(!saveHero.length) return null

    // const {heroes} = saveHero;
    // console.log(heroes)

    // const prueba = saveHero?.map(value => value)
    // console.log(prueba)

    // console.log(saveHero.heroes)
    // const { heroes } = saveHero;
    // console.log(heroes)
    // const prueba = heroes?.map(hero => hero)
    // console.log(prueba)

    const {heroe : {hero}} = heroe;
    console.log(hero)

    // const { powerstats } = hero;
    // console.log(powerstats)
    

    return (
        <div className="container mt-5 ms-4">
            <h4>Acumulativo de powerstats</h4>
            {hero.map((value) => (
                <ul key={value.id}>
                <li>🧙Intelligence: {value.powerstats.intelligence}</li>
                <li>🏋️‍♂️Strength: {value.powerstats.strength}</li>
                <li>⚡Speed: {value.powerstats.speed}</li>
                <li>🔋Durability: {value.powerstats.durability}</li>
                <li>⚔️Power: {value.powerstats.power}</li>
                <li>🤜Combat: {value.powerstats.combat}</li>
                <li>🚀Peso: {value.appearance.height[1]}</li>
                <li>🏗️Altura: {value.appearance.weight[1]}</li>
            </ul>
            ))}
        </div>
    )
}
