import DetailHero from "./DetailHero";
export default function ResultsSearch({heroes, hero, handleSaveHero, setSaveHero}) {

    // const { results } = heroes;
    // if(!heroes) return null;

    if(!hero.length) return null;
    // console.log(hero.hero.id);

    // console.log(hero)

    // const prueba = hero.map((value, index) => value.id)
    // console.log(prueba)

    // console.log(heroes)
    // const { results } = heroes;
    // console.log(results)

    // console.log(heroes.results[0].powerstats.intelligence)

    return (
        <div>
            <div className="row w-80 mx-auto">

                {hero?.map((hero, index) => (
                    <DetailHero
                    key={index}
                    name={hero?.name}
                    imagen={hero?.image}
                    id={hero?.id}
                    // hero={hero}
                    // setSaveHero={setSaveHero}
                    handleSaveHero={handleSaveHero}
                    />
                ))}
            </div>
        </div>
    )
}
