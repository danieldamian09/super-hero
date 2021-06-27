import { Fragment } from "react";
import Mesage from "./Mesage";

export default function ResultsSearch({hero, handleSaveHero, saveHero}) {

    if(!hero) return null;

    const { name, image, biography } = hero;

    if(!biography) return null
    const valores = Object.values(biography);

    if(!saveHero) return null
    const good = saveHero.map(el => el).filter(el => el.biography.alignment === "good")
    const bad = saveHero.map(el => el).filter(el => el.biography.alignment === "bad")

    return (
        <Fragment>
            {(good.length > 3) && <Mesage text="solo se pueden agregar 3 buenos debe eliminar 1" />}
            {(bad.length > 3 ) && <Mesage text="solo se pueden agregar 3 malos debe eliminar 1" />}
            {(name || image) ? (
            <div className=" mx-auto col-lg-12 col-md-12 mt-3">
                <div className="card mb-3 bg-dark" >
                    <div className="row g-0">
                        <div className="col-md-4 " >
                            <img src={image.url} className="img-fluid rounded" alt={name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-light">{name}</h4>
                                <p className="text-light">Nombre Completo: {valores[0]}</p>
                                <p className="text-light">Editora: {biography.publisher}</p>
                                <p className="text-light">Lugar de Nacimiento: {valores[3]}</p>
                                <button onClick={handleSaveHero} disabled={saveHero.length === 6 } className="btn btn-primary">Agregar</button>
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

