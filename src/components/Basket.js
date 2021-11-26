import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { propTypes } from 'react-bootstrap/esm/Image';
import App from '../App';

const Basket = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    console.log(props.basketItems)
    setOpen(true);
  }
  const onCloseModal = () => setOpen(false);

  let removeCartItems = (basket, setBasket, index) => {
    let storedCartItems = [...basket]
    storedCartItems.splice(index, 1)
    setBasket(storedCartItems)
}
  return (
    <div>
      <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart} /></button>
      <Modal open={open} onClose={onCloseModal} center>
        <div>
          <br></br>
          <h2>My Basket</h2>
          {props.basketItems.map((item, index) => {
            return (<div>
              <img src={item.url} alt="cat on sale" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className="delete-btn" onClick={() => removeCartItems(index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>)
          })
          }
        </div>
      </Modal>
    </div>
  )
}


// image
// price
// name



export default Basket






