
// import { useState } from "react";
// import Basket from "./Basket";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import Modal from 'react-modal';

// const Modal2 = () => {
    

//     let addItem = () =>{
//                 let storedItem = [...item]
//                 storedItem.push(input)
//                 setItem(storedItem)
//             }
//     let removeItem = (index) => {
//                 let storedItem = [...item]
//                 storedItem.splice(index, 1)
//                 setItem(storedItem)
//     }        

//     return (
//         <Modal.Dialog>
//         <Modal.Header closeButton>
//             <Modal.Title>Cat Basket</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//             <p>Modal body text goes here.</p>
//             <button className="delete-btn" onClick={() => removeItem (index)}></button>
//         </Modal.Body>
//         <div className ="container">
//             <h1>My Basket:</h1>
//             <button onClick={addItem}>add note</button>
//             <p>{input}</p>  
//             {item.map((item, index) => {
//             return (
//             <div key={index}>                   
//             <h2 className="note">{item}
//             <button className="delete-btn" onClick={() => removeItem (index)}><FontAwesomeIcon icon={faTrashAlt}/></button></h2>
//             </div> 
//             )
//         })}
//         </div>
//         <Modal.Footer>
//         </Modal.Footer>
//         </Modal.Dialog>


       
//     );
//       }

// export default Modal2;



