import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const[users,setUsers]=useState([])
  async function fetchData() {
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")

    setUsers(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <h1>{users[0]?.username}</h1>
  )
}

export default Home;