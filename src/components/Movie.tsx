//Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';


const Movie = ({item}:any) => {

    return (
        <div className='movie' >
            {
                //Each movie card is link to the MovieDetails page/component - based on id
            }
            <Link className='movie-link' to={`/movie/${item.id}`}>
            <img src={(item.posterUrl !== '') ? item.posterUrl : 'https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg'} alt={item.title} width='120px' height='200px'/>
            <h5>{item.title.split('').filter((ch:string, index:number) => index < 15).join('')}{(item.title.length > 15) ? '..' : ''}</h5>
            </Link>
        </div>
    )
}

export default Movie;