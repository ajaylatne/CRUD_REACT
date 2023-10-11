import React from 'react'
import { allUsersDataFromDB } from '../ApiServices/ApiServices'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'




function ShowUser() {

  const [allData, setAllData] = useState([])
  async function allUsersData(){
    await allUsersDataFromDB().then((request)=>{setAllData(request.data)}).catch((error)=>{console.log(error)})
  }



  useEffect(()=>{allUsersData()}, [])
  return (
    <table className="table table-dark table-hover">
      <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>FullName</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
      </thead>
      <tbody>
      
        {
            allData.map((user) =>{return(
              <tr key={ user.id }>
                  <td>{ user.id }</td>
                  <td>{ user.username }</td>
                  <td>{ user.password }</td>
                  <td>{ user.email }</td>
                  <td>{ user.fullname }</td>
                  <td><NavLink to={`/update/${user.id}`}><i className="bi bi-pencil-square"></i></NavLink></td>
                  <td><NavLink to={`/delete/${user.id}`}><i className="bi bi-trash3-fill"></i></NavLink></td>
              </tr>
            )})

        }
       
          
      </tbody>
    </table>
  )
}

export default ShowUser
