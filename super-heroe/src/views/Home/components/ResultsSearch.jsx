export default function ResultsSearch({heroes}) {

    // const { results } = heroes;
    if(heroes) return null;

    // console.log(heroes.results[0].powerstats.intelligence)

    return (
        <div>
            <h4>Integrantes Equipo</h4>
            <div className="d-flex">
                <p className="mx-4">Heroe Name</p>
                <button>Ver Detalle</button>
                <button>Eliminar</button>
            </div>
        </div>
    )
}
