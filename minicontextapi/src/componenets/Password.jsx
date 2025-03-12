import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Password() {
    const {user , log} = useContext(UserContext)
    console.log(user,log)
    if(!log) return <div>no name found</div>
  return (
    <div>
      Password is {log.namex}
    </div>
  )
}

export default Password;
