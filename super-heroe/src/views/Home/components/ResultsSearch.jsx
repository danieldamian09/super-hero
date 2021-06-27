import { Fragment } from "react";
export default function ResultsSearch({hero, handleSaveHero}) {

    if(!hero) return null;

    const { name, image, powerstats, appearance, work, biography } = hero;

    if(!biography) return null
    const valores = Object.values(biography);
    console.log(valores)


    return (
        <Fragment>
            {(name || image) ? (
            <div className=" mx-auto col-lg-12 col-md-12 mt-3">
                <div class="card mb-3 bg-dark" >
                    <div class="row g-0">
                        <div class="col-md-4 " >
                            <img src={image.url} class="img-fluid rounded" alt={name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-light">{name}</h4>
                                <p className="text-light">Nombre Completo: {valores[0]}</p>
                                <p className="text-light">Editora: {biography.publisher}</p>
                                <p className="text-light">Lugar de Nacimiento: {valores[3]}</p>
                                <button onClick={handleSaveHero} className="btn btn-primary">Agregar</button>
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

