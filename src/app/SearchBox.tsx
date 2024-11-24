'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { useState,FormEvent } from 'react';



function SearchBox() {

  const [input,setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(!input) return

    router.push(`/search?term=${input}`); 


    }
  return (
   <form onSubmit={handleSearch}
    className='max-w-6xl mx-auto flex justify-between items-center px-5'>

    <input type="text" 
    value = {input}
    onChange={(e)=> setInput(e.target.value)}
    placeholder='Search keywords...'
    className='w-full h-14 rounded-sm flex-1 placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400'/>

    <button type="submit"
    disabled={!input}
    className={`
      ${input ? 'bg-gray-600 h-11 w-24 rounded-full text-orange-400' : 'text-gray-700 opacity-50 bg-gray-400 h-11 w-24 rounded-full'}
  `}>Search</button>

   </form>
  )
}

export default SearchBox
