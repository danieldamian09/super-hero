

export default function DetailHero({heroe, name, imagen, id, handleSaveHero, hero, setSaveHero}) {

    // if(!name.length) return null;

    // if(!name.length) return null;
    // if(!imagen.length) return null;
    // console.log(name)
    // console.log(imagen)
    // console.log(id)
    // console.log(hero)

    // const {results} = heroe
    // const { id, name, powerstats} = results[0];
    // console.log(id)
    // console.log(name)
    // console.log(powerstats)

    
    


    return (
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center  my-2 icono-wrap">
                <div className="card border-dark" style={{width: '18rem'}}>
                    <img src={imagen?.url} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <button onClick={handleSaveHero} className="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
    )
}
