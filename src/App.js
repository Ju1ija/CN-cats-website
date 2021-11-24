
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

import { useState } from "react";
import './App.css';
import Card from "./components/Card.js"
import List from "./List";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// const Basket = () => {
//     const [input, setInput] = useState("");
//     const [ item, setItem] = useState (["item 1", "item 2","item 3"]);
    

//     const addItem = () =>{
//                 let storedItem = [...item]
//                 storedItem.push(input)
//                 setItem(storedItem)
//             }
//     const removeItem = (index) => {
//                 let storedItem = [...item]
//                 storedItem.splice(index, 1)
//                 setItem(storedItem)
//     }        


  const numOfCards = new Array(12).fill();

  return (
    <div className="cats-on-sale">
      {numOfCards.map((index) => {
        return (
          <div key={index}>
            <Card />
          </div>
        )
      })}
    </div>
  )
}

export default App;
