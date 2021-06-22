import DetailTeam from './DetailTeam'

export default function Team(saveHero) {

    // if(!saveHero.length) return null
    const { heroes } = saveHero;
    console.log(heroes)

    return (
        <div>
            {heroes?.map((heroe, index) => (
                    <DetailTeam
                    key={index}
                    heroe={heroe}
                    />
                ))}
        </div>
    )
}
