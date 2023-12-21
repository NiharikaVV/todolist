import "./index.css"
import { useState } from "react"

export default function App(){
  const[newItem, setNewItem]=useState("")
  const[formdata, setFormData] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    setFormData((currentformdata)=>{
      return[
        ...currentformdata,
        {id:crypto.randomUUID(),title:newItem,completed:false},
      ]
    })
    setNewItem("")
  }
  function toggletodo(id,completed){
    setFormData(currentformdata =>{
      return currentformdata.map(
        todo=>{
          if (todo.id === id){
            return{...todo,completed}
          }
          return todo
        }
      )
    })
  }
  function deletetodo(id){
    setFormData(current=>{
      return current.filter(todo=>todo.id!==id)
    })
  }
  console.log(formdata)
  return<div>
   <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input  value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id = "item" />

    </div>
    <button className="b1">Add</button>
  </form>
  <h1>to do list</h1>
  <ul className = "text">
    {formdata.length === 0 && "No todos"}
    {formdata.map(todo =>{
      return(
        <li key = {todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange ={e => toggletodo(todo.id, e.target.checked)}/>
          {todo.title}
        
        <button onClick={()=> deletetodo(todo.id)} className="b2">delete</button>
      </label>
    </li>
      )
    })}
    
    
  </ul>
  </div>
}