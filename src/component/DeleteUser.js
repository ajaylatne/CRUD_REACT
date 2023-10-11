import React, { useState } from 'react'
import { userDatafromDB, deleteUserFromDB } from '../ApiServices/ApiServices'
import { useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

function DeleteUser() {
  const {userid} = useParams()
  const  [data, setData] = useState({})
  const nav = useNavigate()

  async function userData(){
      await userDatafromDB(userid).then((request)=>{setData(request.data)}).catch()
  }

  async function deleteUser(){
      await deleteUserFromDB(userid).then((request)=>{ nav('/show') }).catch()
  }

  useEffect(()=>{userData()}, [])
  return (
    <div className='container w-50 border border-5 rounded-3 p-3'>
      <h3 className='text-primary text-center'>Do You really wants to delete record <span style={{color: "red"}}>{ data.username }</span></h3>
      <button className='btn btn-outline-danger col-6' onClick={ deleteUser }>Yes</button>
      <NavLink to="/show"><button className='btn btn-outline-warning col-6'>No</button></NavLink>
    </div>
  )
}

export default DeleteUser
