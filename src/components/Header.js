
import AddIcon from '@mui/icons-material/Add';
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';

const Header = () => {

  const useAppstate = useContext(Appstate);

  return (
    <div className=' sticky top-0 z-30 header1 text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between '>
      <Link to={'/'}></Link><span> Turkish<span className='text-white'>Dramas</span></span>
      
      { useAppstate.login ? 
           
        <Link to={'/addmovie'}>
          <h1 className='text-lg text-white flex  cursor-pointer'>
            <Button> <AddIcon className='mr-1 decoration-white' /> </Button>Add New
          </h1></Link>
          :
          <Link to={'/login'}>
          <h1 className='text-lg pr-6 font-medium capitalize text-white flex  cursor-pointer bg-green-400 items-center'>
            <Button> <AddIcon className='mr-1 decoration-white' /> </Button>Login
          </h1></Link>
    }
    </div>
  )
}

export default Header
