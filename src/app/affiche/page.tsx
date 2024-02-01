'use client'

import { useMovies } from '../providers/api-service';

export default function Affiche() {
    const { data: movies, isLoading, isError } = useMovies();
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading movies data</p>;
    }
    
    return (
        <div>
        </div>
    )
}