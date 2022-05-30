//Import dependencies
import React from 'react';
import Movie from './Movie';

//Body of the object in list
interface CarouselBody {
    title: string,
    items: any[]
  }

const Carousel = ({title, items}: CarouselBody) => {

    return(
        <div className='carousel'>
            <h3>{title}</h3>
            <ul className='movies-list'>
            
                {   //Create list of movie boxes
                    items.map((item: any, index: number) => 
                    <div>
                    <Movie key={index + index} item={item} />
                    </div>
                    )
                }
            </ul>
        </div>
    )
}

export default Carousel;