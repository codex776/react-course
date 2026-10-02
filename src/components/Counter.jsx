import {useState} from 'react'

function Counter(){
   
    const[count,setCount]=useState([])
    return(
        <>
    <h1>{count.toString()}</h1>
    <button onClick={()=>setCount((prevCount)=>[...prevCount,"+1"])}>Increment</button>
    <button onClick={()=>setCount((prevCount)=>[...prevCount,"-1"])}>Decrement</button>
    
    </>
)
}
export default Counter;