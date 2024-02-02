'use client'

import { fetchMovies } from '../providers/api-service';
import { useQuery } from '@tanstack/react-query'
import Card from '../affiche/card';
import styles from './page.module.css'

const useMovies = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies
    });
}

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

export default function Affiche() {
    const { data } = useMovies();

    let cards: filmCard[] = [];

    if (data) {

      for (let i = 0; i < data.films.length; i++) {
  
        let card: filmCard = {
            actors: [],
            ageRating: '',
            country: {},
            description: '',
            directors: [],
            genres: '',
            id: '',
            img: '',
            name: '',
            originalName: '',
            releaseDate: '',
            runtime: '',
            userRatings: {
                kinopoisk: '',
                imdb: ''
            },
        }

        card.actors = data.films[i].actors;
        card.ageRating = data.films[i].ageRating;
        card.country = data.films[i].country;
        card.description = data.films[i].description;
        card.directors = data.films[i].directors;
        card.genres = data.films[i].genres;
        card.id = data.films[i].id;
        card.img = data.films[i].img;
        card.name = data.films[i].name;
        card.originalName = data.films[i].originalName;
        card.releaseDate = data.films[i].releaseDate;
        card.runtime = data.films[i].runtime;
        card.userRatings = data.films[i].userRatings;

        cards.push(card);
      }
    }

    return (
        <div className={styles.container}>
        {
           cards.map(card => <Card key={card.id} filmCard={card} />)
        }
        </div>
    
    )
}