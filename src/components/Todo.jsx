function Todo({task, togglePopup}) {
    return(
        <div className="todo-item">
            <p>{task}</p>
            <button onClick={()=>{togglePopup()}}>Delete</button>
        </div>
    )
    
}


export default Todo;