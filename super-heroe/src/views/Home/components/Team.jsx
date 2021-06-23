import React, { Fragment } from 'react';
export default function Team({heroes, setSaveHero}) {

    // console.log(heroes)
    // console.log(delateHero)

    if(heroes.length === 0) return null
    // const { heroes } = saveHero;
    
    const prueba = heroes?.map(heroe => heroe?.hero[0])
    console.log(prueba)
    // const id = prueba[0].id
    // console.log(id)

    const intelligence = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.intelligence), 0)
    const strength = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.strength), 0)
    const speed = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.speed), 0)
    const durability = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.durability), 0)
    const power =  prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.power), 0)
    const combat = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.combat), 0)
    const height = prueba?.reduce((acc, el) => acc + parseInt(el.appearance.height[1]), 0)
    const weight =  prueba?.reduce((acc, el) => acc + parseInt(el.appearance.weight[1]), 0)
    
    const delateHero = id => {
        const UpDateHeroe = heroes?.map(heroe => heroe?.hero[0]).filter(heroe => parseInt(heroe.id) !== id)
        // ?.filter(heroe => parseInt(heroe.id) !== 69)
        console.log(UpDateHeroe)
        // setSaveHero(UpDateHeroe)
    }

    // console.log(prueba.length)

    // eliminar
    // const prueba2 = prueba?.filter(heroe => parseInt(heroe.id) !== 69)
    // console.log(prueba2)

    return (
        <Fragment>
            {(prueba.length)? (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4>Acumulativo de powerstats Equipo</h4>
                <ul>
                <li>🧙Intelligence: {intelligence}</li>
                <li>🏋️‍♂️Strength: {strength}</li>
                <li>⚡Speed: {speed}</li>
                <li>🔋Durability: {durability}</li>
                <li>⚔️Power: {power}</li>
                <li>🤜Combat: {combat}</li>
                <li>🚀Altura: {height}cm</li>
                <li>🏗️Peso: {weight}Kg</li>
            </ul>
            </div>
            <div className="col-lg-6">
                <h4>Integrantes del Equipo</h4>
                {prueba.map(value => (
                    <div className="col mt-2" key={value.id}>
                        <h5 className="mx-2">{value.name}</h5>
                        <p>{value.id}</p>
                        <button className="btn btn-primary btn-sm mx-2">Ver Detalle</button>
                        <button className="btn btn-primary btn-sm" onClick={() => delateHero(parseInt(value.id))}>Eliminar</button>
                    </div>
                ))}
            </div>
            </div>
        </div>
            )
        :null
        }
        </Fragment>

        
    )
}
