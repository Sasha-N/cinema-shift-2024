import Link from "next/link";
import styles from './page.module.css';

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
    userRatings: {
        kinopoisk: string,
        imdb: string
    },
}

export default function Card({ filmCard }: { filmCard: filmCard }) {
    const URL = `https://shift-backend.onrender.com` + filmCard.img;
    return (
        <div className={styles.container_card}>
            <div className={styles.cover} style={{ backgroundImage: "url(" + URL + ")" }}>
                <div className={styles.label}>
                    <p className={styles.genre}>{filmCard.genres[0]}</p>
                    <p className={styles.release}>{filmCard.releaseDate}</p>
                </div>
            </div>
            <div className={styles.description}>
                <p className={styles.name}>{filmCard.name}</p>
                <p className={styles.rating}>Кинопоиск: {filmCard.userRatings.kinopoisk}</p>
                <p className={styles.rating}>IMDb: {filmCard.userRatings.imdb}</p>
                <Link className={styles.detail} href={{ pathname: '/movie/', query: { id: filmCard.id } }}>Подробнее</Link>
            </div>
        </div>
    )
}