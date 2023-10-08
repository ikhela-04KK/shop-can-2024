// importation de useState
import React, {useState } from "react"
import "./style.css"

interface TodoItem{
  id:string,
  title:string,
  completed:boolean
}

export default function App(){
  //pour la reccuperation local de newItem
const [newItem , setNewItem] = useState("");
// setNewItem("Jouer avec ikhela") 

const [todos, setTodo] = useState<TodoItem[]>([]);//je devais annoter le type du tableau
function handleSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  
  setTodo(
    [...todos, 
      {
        id: crypto.randomUUID(),
        title:newItem, 
        completed:false
      }
    ]
  )
}
  return (
  <>
      <form onSubmit={handleSubmit}className="new-item-form">
        <label htmlFor="item"></label>
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} type="text" name="" id="item" 
        />
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox"/>
              item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
  </>
  )
}
