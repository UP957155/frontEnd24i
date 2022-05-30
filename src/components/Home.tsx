//Import dependencies
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { fetchCarousels } from './fetchMethods/fetchCarousels';

//Body of the object in list
interface CarouselBody {
  title: string,
  items: any[]
}

const Home = () => {

  const [carousels, setCarousels] = useState<CarouselBody[]>([]) //Array of carousels
  const [loading, setLoading] = useState<boolean>(false) //Loading state
  const [error, setError] = useState<any | null>(null) //Error object

  useEffect(() => {
    //Get list of carousels
    const getCarousels = async() => {

      setLoading(true) //Start loading

      const data = await fetchCarousels()

      if(!data.error){
        setLoading(false) //Stop loading
        setCarousels(data)
      }else{
        setLoading(false) //Stop loading
        setError(data)
      }

    }

    getCarousels() //Call function
  }, []) //Define useEffect dependencies



  return (
    <div className='carousels-list'>
      <ul>
        { //Present list of carousels or loading message or error message
        (carousels.length > 0) ?
        carousels.map((c: CarouselBody, index: number) => 
        <Carousel key={index} title={c.title} items={c.items} />
        )
        : (loading) ? <p>Loading ...</p> : (error) ? <p>{error.message}</p> : null
        }
      </ul>
    </div>
  );
}

export default Home;
