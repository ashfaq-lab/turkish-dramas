import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { dramasRef } from '../firebase';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(dramasRef)
      _data.forEach((doc) => {
        setData((prv) => [...prv, {...(doc.data()),id: doc.id}])
      })
      setLoading(false);

    }
    getData();
  }, [])
  return (
    <div className='flex flex-wrap justify-between px-3 mt-2'>
      {loading ? <div className='w-full flex justify-center items-center h-96'> <ThreeDots height={40} color='white' /></div > :

        data.map((e, i) => {
          return (
           <Link to={`/details/${e.id}`}> <div key={i} className='card shadow-lg object-contain p-2 hover:-translate-y-4 cursor-pointer text-lg mt-6 transition-all duration-500' >
              <img className=' h-52 md:h-60 w-40 object-fill ' src={e.image} alt='Kurulus'></img>
              <h1 style={{maxWidth:'100%'}}>
                  {e.title} </h1>
              <h1 className='flex items-center'>
                <span className='text-gray-600'>Rating :</span>
                <ReactStars
                  size={20}
                  half={true}
                  value={e.rating/e.rated}
                  edit={false}
                />
              </h1>
              <h1> <span className='text-gray-600'>Year :</span>{e.year} </h1>


            </div></Link>
          )
        })

      }
    </div>
  )
}

export default Cards
