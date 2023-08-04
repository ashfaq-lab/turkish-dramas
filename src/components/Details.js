import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'       
import { doc ,getDoc} from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Reviews from './Reviews'
const Details = () => {
  const { id,} = useParams();
  const [data, setData] = useState({
    title:"",
    year:"",
    image:"",
    description:"",
    rating:0,
    useRated:0,
  });
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "dramas", id)
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false)
    }
    getData();
  }, [id, setData])
  console.log(data);
  const [loading, setLoading] = useState(false);
  return (
    <div className='p-4  mt-4 flex flex-col md:flex-row justify-center w-full md:items-start md:w-full space-x-0 pr-0  '>
      {
        loading ? <div className='h-96 w-full flex justify-center items-center'><ThreeCircles height={35} color='white' /></div> :

          <>
            <img className='h-80 mr-4 block md:sticky top-24' src={data?.image} alt={data?.title} />
            <div className=' ml-4 w-full md:w-1/2  '>
              <h1 className='text-2xl font-bold text-gray-400'>
                {data?.title}
                <span className='text-xl'>{data?.year}</span></h1>
              <ReactStars
                size={20}
                half={true}
                value={data.rating / data.rated}
                edit={false}
              />
              <p className='mt-2  '>{data?.description}</p>
              <Reviews id={id} prevRating={data.rating} useRated={data.rated}/>

            </div>
          </>
      }
    </div>
  )
}

export default Details
