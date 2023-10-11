import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { userDatafromDB, saveUserDataToDB } from '../ApiServices/ApiServices'

function UpdateUser() {
  const { userid } = useParams()
  const { register, handleSubmit, reset, setValue } = useForm()
  const nav = useNavigate()


  async function saveUserData(data){
    await saveUserDataToDB(userid, data).then((request)=>{nav('/show')}).catch(()=>{})

  }

  async function userData(){
      await userDatafromDB(userid).then((request)=>{
        setValue('username', request.data.username)
        setValue('password', request.data.password)
        setValue('email', request.data.email)
        setValue('fullname', request.data.fullname)
      }).catch()
  }
  useEffect(()=>{userData()}, [])



  return (
    <div className="container w-50 border border-3">
        <form onSubmit={ handleSubmit(saveUserData) }>
            <h3 className="text-primary text-center">User Form</h3>

            <div>
                <label className="form-label">Enter Username</label>
                <input className="form-control" type="text" required  {...register('username')}/>
            </div>

            <div>
                <label className="form-label">Enter Password</label>
                <input className="form-control" type="password" required {...register('password')}/>
            </div>

            <div>
                <label className="form-label">Enter Email</label>
                <input className="form-control" type="email" required  {...register('email')}/>
            </div>

            <div>
                <label className="form-label">Enter FullName</label>
                <input className="form-control" type="text" required  {...register('fullname')}/>
            </div>

            <button type="submit" className="btn btn-outline-success col-5 m-2">Update User</button>
            <button type="reset" className="btn btn-outline-warning col-5 m-2">Reset</button>
        </form>
        
    </div>
  )
}

export default UpdateUser
