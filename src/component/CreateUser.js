import { useForm } from 'react-hook-form'
import { addUserToDB } from '../ApiServices/ApiServices'
import { useNavigate } from 'react-router-dom'
function CreateUser(){
    const {register, handleSubmit, reset} = useForm()
    const nav = useNavigate()

    async function addUser(data){
        await addUserToDB(data).then((request)=>{nav('/show')}).catch((error)=>{console.log(error)})
    }

    return(
    <div className="container w-50 border border-3">
        <form onSubmit={ handleSubmit(addUser) }>
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

            <button type="submit" className="btn btn-outline-success col-5 m-2">Add User</button>
            <button type="reset" className="btn btn-outline-warning col-5 m-2">Reset</button>
        </form>
        
    </div>
    )
}

export default CreateUser