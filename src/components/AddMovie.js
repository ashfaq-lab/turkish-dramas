import React, { useContext, useState } from 'react'

import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { dramasRef } from '../firebase';
import swal from 'sweetalert';
import { Appstate } from '../App';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const useAppstate=useContext(Appstate);
  const navigate=useNavigate();

  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rated: 0,
    rating: 0,
  });
  const [loading, setLoading] = useState(false);
  const addDrama = async () => {

    setLoading(true);

    try {
     if(useAppstate.login){
    
      await addDoc(dramasRef, form);
      swal({
        title: "Successfully Added",
        icon: "success",
        buttons: "close",
        timer: 3000
      })

      setForm({
        title: "",
        year: "",
        description: "",
        image: ""
      })
    }else{
      navigate('/login')
    }
    } catch (err) {
      swal({
        title: "err",
        icon: "error",
        buttons: "false",
        timer: 3000
      })
    }
    setLoading(false);
  }
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-purple-400">Add Drama</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-50">(Add new Drama Episode) </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-white">Title</label>
                  <input type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    class="w-full bg-white rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-300">Year</label>
                  <input type="email"
                    id="email"
                    name="email"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    class="w-full  rounded border bg-white border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">Image link</label>

                  <input
                    id="message"
                    name="message"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    class="w-full bg-white rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">About Drama Description</label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">

                  </textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button onClick={addDrama} class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-950P rounded text-lg">
                  {loading ? <TailSpin height={25} color="white" /> : 'submit'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddMovie;
