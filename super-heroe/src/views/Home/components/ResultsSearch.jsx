import { Fragment } from "react";
export default function ResultsSearch({hero, handleSaveHero}) {

    if(!hero) return null;

    const { name, image, powerstats, appearance, work } = hero;


    return (
        <Fragment>
            {(name || image) ? (
            <div className="row w-80 mx-auto col-lg-6 col-md-12">
            <div className="d-flex justify-content-center  my-2 icono-wrap">
                <div className="card border-dark" style={{width: '18rem'}}>
                    <img src={image.url} className="card-img-top" alt={name}/>
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-light">{name}</h5>
                        <ol>
                            <li className="text-light">intelligence: {powerstats.intelligence}</li>
                            <li className="text-light">strength: {powerstats.strength}</li>
                            <li className="text-light">speed: {powerstats.speed}</li>
                            <li className="text-light">durability: {powerstats.durability}</li>
                            <li className="text-light">power: {powerstats.power}</li>
                            <li className="text-light">combat: {powerstats.combat}</li>
                            <li className="text-light">height: {appearance.height[1]}</li>
                            <li className="text-light">weight: {appearance.weight[1]}</li>
                        </ol>
                        <p className="text-light">{work.base}</p>
                        <div className="d-flex justify-content-between">
                            <button onClick={handleSaveHero} className="btn btn-primary">Agregar</button>
                            <button className="btn btn-primary">Ver detalle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ):
    null}
        </Fragment>
    )
}
