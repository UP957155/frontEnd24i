//Import dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './fetchMethods/fetchMovieDetails';


const MovieDetails = () => {

    let {id} = useParams() //Get id number/value from URL

    const [movie, setMovie] = useState<any | null>(null) //Array of carousels
    const [loading, setLoading] = useState<boolean>(false) //Loading state
    const [error, setError] = useState<any | null>(null) //Error object

    useEffect(() => {
        // Get detailed data about movie
        const getMovieDetails = async() => {

            setLoading(true) //Start loading

            const data = await fetchMovieDetails(id)

            if(!data.error){
                setLoading(false) //Stop loading
                setMovie(data)
                console.log(data)
            }else{
                setLoading(false) //Stop loading
                setError(data)
                console.log(data)
            }
        }

        getMovieDetails() //Call function

    }, [id]) //Define useEffect dependencies: id

    return (
        <div className='movie-details'>
            { (movie !== null) ? //Present content - Title has now scrollbar!! Better way would be applied moving animation of the title (if title too long)
            <div>
                <img className='movie-image' src={movie.posterUrl} alt={movie.title} width='100%' height='500px' />
                <p className='title'>{movie.title}, {movie.year}</p> 
                <div className='director'><strong>Director:</strong><p>{movie.director}</p></div>
                <div className='actors'><strong>Movie Stars:</strong><p>{movie.actors}</p></div>
                <div className='description'><strong>About:</strong><p>{movie.plot}</p></div>
                <div className='genres'><strong>Genres:</strong><p>{movie.genres.join(', ')}</p></div>
                <Link className='back-btn' to='/'>
                    Back to Home
                </Link>
            </div>
            :
            (loading) ? //Content if loading
            <div>
                <img src='https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg' alt='Loading ...' width='100%' height='500px' />
                <div className='title-loading'>Loading ...</div>
                <div className='director'>Director: Loading ...</div>
                <div className='actors'>Actors: Loading ...</div>
                <div className='description'>Loading ...</div>
            </div>
            :
            (error) ? //Content if error
            <div>
                <img src='https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg' alt='Error' width='100%' height='500px' />
                <div className='title-error'>{error.message}</div>
                <Link className='back-btn' to='/'>
                    Back to Home
                </Link>
            </div>
            :
            null
            }
        </div>
    )
}

export default MovieDetails;