import { Fragment} from "react"

export default function TeamDetail({saveHero, setSaveHero}) {

    if(saveHero.length === 7) return null

    // eliminar heroe del equipo
    const delateHero = id => {
        const filtrado = saveHero.filter(el => el.id !== id)
        setSaveHero(filtrado)
    }

    return (
        <Fragment>
            {(saveHero.length)? (
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center my-2 icono-wrap flex-wrap" >
                {saveHero.map(value => (
                    <div className="card border-dark col-lg-3 col-md-6 col-sm-8 mx-lg-2 mt-2" key={value.id}>
                        <img src={value.image.url} className="card-img-top" alt={value.name}/>
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-light">{value.name}</h5>
                        <ol>
                            <li className="text-light">intelligence: {value.powerstats.intelligence}</li>
                            <li className="text-light">strength: {value.powerstats.strength}</li>
                            <li className="text-light">speed: {value.powerstats.speed}</li>
                            <li className="text-light">durability: {value.powerstats.durability}</li>
                            <li className="text-light">power: {value.powerstats.power}</li>
                            <li className="text-light">combat: {value.powerstats.combat}</li>
                            <li className="text-light">height: {value.appearance.height[1]}</li>
                            <li className="text-light">weight: {value.appearance.weight[1]}</li>
                        </ol>
                        <p className="text-light">{value.work.base}</p>
                    </div>
                        <button className="btn btn-danger btn-sm" onClick={() => delateHero(value.id)}>Eliminar</button>
                    </div>
                ))}
            </div>    
            ): null
        }
        </Fragment>
    )
}
