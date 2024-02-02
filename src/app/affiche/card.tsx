import Link from "next/link"

interface filmCard {
    actors: Array<any>,
    ageRating: string,
    country: any,
    description: string,
    directors: Array<any>,
    genres: string,
    id: string,
    img: string,
    name: string,
    originalName: string,
    releaseDate: string,
    runtime: string,
    userRatings: Array<any>,
}

export default function Card(filmCard: filmCard) {
    const URL = `https://shift-backend.onrender.com` + filmCard.img ;
    const style = {
        background: "url(" + URL + ")" + ", lightgray 50% / cover no-repeat",
        backgroundSize: "100% 100%",
    }
    return (
        <div className="card">
                <div style={style}></div>
                <p>{filmCard.name}</p>
                <p>{filmCard.description}</p>
                <Link href={{ pathname: '/movie/', query: { id: filmCard.id } }}>Подробнее</Link>
        </div>
    )
}