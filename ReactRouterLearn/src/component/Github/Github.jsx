import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        //UseEffect ek baar call hoga jab component mount hoga!
        fetch("https://api.github.com/users/alk-alok")
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            console.log(data);
        })
    },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl mt-5'>
      Github Followers: {data.followers}

      <img src={data.avatar_url}alt='Git pic' width={300}/>
    </div>
  )
}

export default Github
