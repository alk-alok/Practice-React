import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='bg-slate-400 p-11 text-3xl'>
      User: {id}
    </div>
  )
}

export default User
