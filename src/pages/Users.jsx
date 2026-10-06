import { Link,useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import  axios  from "axios";
function Users() {
    const{id}=useParams();
    const [user,setUser]=useState({})
    async function fetchUserData() {
        const { data }=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        setUser(data)
    }
     useEffect(()=>{
    fetchUserData()
    },[])

    return (
        <>
        <div>
            <Link to="/">Back to home</Link>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            
        </div>
        </>

  )
}

export default Users