import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function github() {

    const data=useLoaderData()
    //const [data,setData]=useState([])
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amz162')
    //     .then(res=>res.json())
    //     .then(data=>{console.log(data)
    //     setData(data)
    //     });
        
    // },[ ])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : {data.followers}
      <img className='text-center' src={data.avatar_url} alt='pppic' width={300} />
    </div>
  )
}

export default github

export const githubInfoLoader = async () => {
    const response= await fetch('https://api.github.com/users/amz162')
    return response.json()
}
