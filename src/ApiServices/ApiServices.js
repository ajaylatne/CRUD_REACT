import axios from "axios"


const baseUrl = "http://localhost:5000"
function addUserToDB(data){
    const relUrl = baseUrl + '/users'
    return axios.post(relUrl, data)
}

function allUsersDataFromDB(){
    const relUrl = baseUrl + '/users'
    return axios.get(relUrl)
}

function userDatafromDB(userid){
    const relUrl = baseUrl + `/users/${userid}`
    return axios.get(relUrl)
}

function saveUserDataToDB(userid, userdata){
    const relUrl = baseUrl + `/users/${userid}`
    return axios.put(relUrl, userdata)
}

function deleteUserFromDB(userid){
    const relUrl = baseUrl + `/users/${userid}`
    return axios.delete(relUrl)
}


export { addUserToDB, allUsersDataFromDB,  userDatafromDB, saveUserDataToDB, deleteUserFromDB }
