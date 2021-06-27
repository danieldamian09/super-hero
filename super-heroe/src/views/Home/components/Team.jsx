import React, { Fragment } from 'react';
export default function Team({saveHero}) {

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

    
    

    return (
        <Fragment>
            {(saveHero.length)? (
        <div className="container mx-auto">

            <h2 className="text-light text-center">Acumulativo de powerstats Equipo</h2>
            <div className=" border-dark bg-dark">
                
                
                <label htmlFor="intelligence" className="text-light">🧙Intelligence: {intelligence}</label><br/>
                <progress id="intelligence" max="100" value={intelligence/saveHero.length}></progress><br/>
                <label htmlFor="strength" className="text-light">🏋️‍♂️Strength: {strength}</label><br/>
                <progress id="strength" max="100" value={strength/saveHero.length}></progress><br/>
                <label htmlFor="speed" className="text-light">⚡Speed: {speed}</label><br/>
                <progress id="speed" max="100" value={speed/saveHero.length}></progress><br/>
                <label htmlFor="durability" className="text-light">🔋Durability: {durability}</label><br/>
                <progress id="durability" max="100" value={durability/saveHero.length}></progress><br/>
                <label htmlFor="power" className="text-light">⚔️Power: {power}</label><br/>
                <progress id="power" max="100" value={power/saveHero.length}></progress><br/>
                <label htmlFor="combat" className="text-light">🤜Combat: {combat}</label><br/>
                <progress id="combat" max="100" value={combat/saveHero.length}></progress><br/><br/>

                <p className="text-light">🚀Altura Promedio: {parseFloat(height / calcularPromedio, 10).toFixed(2)}cm</p>
                <p className="text-light">🏗️Peso Promedio: {parseFloat(weight / calcularPromedio, 10).toFixed(2)}Kg</p>
            </div>
            
        </div>
            )
        :null
        }
        </Fragment>

        
    )
}


