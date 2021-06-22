import React, { Fragment } from 'react';
export default function Team(saveHero) {

    // if(!saveHero.length) return null
    const { heroes } = saveHero;
    
    const prueba = heroes?.map(heroe => heroe?.hero[0])
    // console.log(prueba)
    // console.log(prueba[0].name)
    const intelligence = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.intelligence), 0)
    const strength = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.strength), 0)
    const speed = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.speed), 0)
    const durability = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.durability), 0)
    const power =  prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.power), 0)
    const combat = prueba?.reduce((acc, el) => acc + parseInt(el.powerstats.combat), 0)
    const height = prueba?.reduce((acc, el) => acc + parseInt(el.appearance.height[1]), 0)
    const weight =  prueba?.reduce((acc, el) => acc + parseInt(el.appearance.weight[1]), 0)

    // console.log(prueba.length)

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
                    {/* <ul key={value.id}> */}
                        <h5 className="mx-2">{value.name}</h5>
                        <button className="btn btn-primary btn-sm mx-2">Ver Detalle</button>
                        <button className="btn btn-primary btn-sm">Eliminar</button>
                    {/* </ul> */}
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
