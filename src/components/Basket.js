import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { image } from 'faker';
import Card from './Card';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Basket = () =>{
    
    const [subTotal, setSubTotal] = useState("");
    const [cartItems, setCartItems] = useState(['item1', 'item2', 'item3']);
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  let removeCartItems = (index) => {
                    let storedCartItems = [...cartItems]
                    storedCartItems.splice(index, 1)
                    setCartItems(storedCartItems)
  }
//   const handle = (props) => {
//     setCookie('Index', props.index, {path: '/'});
//  };

let currentBasket = cartItems.map((cart)=><p>{cart}</p>)

  return (
    <div>
      <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart}/></button>
      <Modal open={open} onClose={onCloseModal} center>
          <div>
              <br></br>
        <h2>My Basket</h2>
        <div>
            <p>{currentBasket}</p>
            <button className="delete-btn" onClick={() => removeCartItems()}><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
        {/* {cartItems.length == '' ? 
        (<>
        <p>Uh oh! Your basket is empty, lets find a furry friend to add</p>
        <button>Continue Shopping</button></>) : (<p>item</p>)} */}
        {/* <p><span>{image}</span><span>{price}</span><span>{name}</span></p> */}
        <p>{subTotal.price}Subtotal</p>
        </div>
      </Modal>
    </div>
    )
}


// image
// price
// name



export default Basket

 




