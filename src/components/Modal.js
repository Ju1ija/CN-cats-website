
import { useState } from "react";
import './App.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Modal = () => {
    

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
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Cat Basket</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal body text goes here.</p>
            <button className="delete-btn" onClick={() => removeItem (index)}><DeleteForeverIcon /></button>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
        </Modal.Dialog>


        // <div className ="container">
        //     <h1>My Basket:</h1>
        //     <input type="text" placeholder="Add note here" onChange={changeHandler}/>
        //     <button onClick={addItem}>add note</button>
        //     <p>{input}</p>  
        //     {item.map((item, index) => {
        //     return (
        //     <div key={index}>                   
        //     <h2 className="note">{item}
        //     <button className="delete-btn" onClick={() => removeItem (index)}><DeleteForeverIcon /></button></h2>
        //     </div> 
        //     )
        // })}
        // </div>
    );
      }

//modal2 test

export default Modal;



