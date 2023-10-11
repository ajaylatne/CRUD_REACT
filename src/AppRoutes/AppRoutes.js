import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateUser, UpdateUser, ShowUser, DeleteUser, AppError } from '../component'
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <CreateUser/> }></Route>
        <Route path="/create" element={ <CreateUser/> }></Route>
        <Route path="/show" element={ <ShowUser/> }></Route>
        <Route path="/update/:userid" element={ <UpdateUser/> }></Route>
        <Route path="/delete/:userid" element={ <DeleteUser/> }></Route>
        <Route path="/*" element={ <AppError/> }></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
