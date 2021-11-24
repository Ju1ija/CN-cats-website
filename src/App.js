import { useState } from "react";
import './App.css';
import Card from "./components/Card.js"
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
            <h1>My Basket:</h1>
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
      }

//modal2 test

export default App;
