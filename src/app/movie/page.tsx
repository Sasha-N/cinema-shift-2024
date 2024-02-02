'use client'

import { fetchMovieById } from '../providers/api-service';
import { useQuery } from '@tanstack/react-query'
import Card from '../affiche/card';

const useFilm = (id: string) => {
    return useQuery({
        queryKey: ['film', id],
        queryFn: () => fetchMovieById(id)
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

export default function Movie(param: any) { 
    let id = param.searchParams.id
    const { data } = useFilm(id);

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

    if (data) {
  
        card.actors = data.film.actors;
        card.ageRating = data.film.ageRating;
        card.country = data.film.country;
        card.description = data.film.description;
        card.directors = data.film.directors;
        card.genres = data.film.genres;
        card.id = data.film.id;
        card.img = data.film.img;
        card.name = data.film.name;
        card.originalName = data.film.originalName;
        card.releaseDate = data.film.releaseDate;
        card.runtime = data.film.runtime;
        card.userRatings = data.film.userRatings;
    }

    return (
        <div>
         <Card filmCard={card} />
        </div>
    )
}