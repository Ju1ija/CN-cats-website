import { useState } from "react";
import './App.css';
import Card from "./components/Card.js"
<<<<<<< HEAD
import List from "./List";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Basket = () => {
    const [input, setInput] = useState("");
    const [ item, setItem] = useState (["item 1", "item 2","item 3"]);
    

    const addItem = () =>{
                let storedItem = [...item]
                storedItem.push(input)
                setItem(storedItem)
            }
    const removeItem = (index) => {
                let storedItem = [...item]
                storedItem.splice(index, 1)
                setItem(storedItem)
    }        

    const changeHandler = (event) => {
        setInput(event.target.value)
    }
    return (
        <div className ="container">
            <h1>My Notes:</h1>
            <input type="text" placeholder="Add note here" onChange={changeHandler}/>
            <button onClick={addItem}>add note</button>
            <p>{input}</p>  
            {item.map((item, index) => {
            return (
            <div key={index}>                   
            <h2 className="note">{item}
            <button className="delete-btn" onClick={() => removeItem (index)}><DeleteForeverIcon /></button></h2>
            </div> 
            )
        })}
        </div>
    );


export default App;
//modal2 test
=======

function App() {
  return <Card />;
}
>>>>>>> 2df0211ab54d5f99a652053f6fe18712578a4303

export default App;
