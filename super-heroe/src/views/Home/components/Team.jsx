import React, { Fragment } from 'react';
export default function Team({saveHero, setSaveHero}) {

    if(saveHero.length === 0) return null
    
    console.log(saveHero)

    const calcularPromedio = saveHero.length
    console.log(calcularPromedio)

    const intelligence = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.intelligence),0)
    const strength = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.strength),0)
    const speed = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.speed),0)
    const durability = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.durability),0)
    const power = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.power),0)
    const combat = saveHero.reduce((acc,el) => acc + parseInt(el.powerstats.combat),0)
    const height = saveHero.reduce((acc,el) => acc + parseInt(el.appearance.height[1]),0)
    const weight  = saveHero.reduce((acc,el) => acc + parseInt(el.appearance.weight[1]),0)

    const delateHero = id => {
        const filtrado = saveHero.filter(el => el.id !== id)
        setSaveHero(filtrado)
    }
    

    return (
        <Fragment>
            {(saveHero.length)? (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4 className="text-light">Acumulativo de powerstats Equipo</h4>
                <ul>
                <li className="text-light">🧙Intelligence: {intelligence}</li>
                <li className="text-light">🏋️‍♂️Strength: {strength}</li>
                <li className="text-light">⚡Speed: {speed}</li>
                <li className="text-light">🔋Durability: {durability}</li>
                <li className="text-light">⚔️Power: {power}</li>
                <li className="text-light">🤜Combat: {combat}</li>
                <li className="text-light">🚀Altura Promedio: {height / calcularPromedio}cm</li>
                <li className="text-light">🏗️Peso Promedio: {weight / calcularPromedio}Kg</li>
            </ul>
            </div>
            <div className="col-lg-6">
                <h4 className="text-light">Integrantes del Equipo</h4>
                {saveHero.map(value => (
                    <div className="col mt-2" key={value.id}>
                        <h5 className="mx-2 text-light">{value.name}</h5>
                        <button className="btn btn-success btn-sm mx-2">Ver Detalle</button>
                        <button className="btn btn-danger btn-sm" onClick={() => delateHero(value.id)}>Eliminar</button>
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
