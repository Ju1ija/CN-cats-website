import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Basket.css';

const Basket = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  let removeCartItems = (index) => {
    let storedCartItems = [...props.basket];
    storedCartItems.splice(index, 1);
    props.setBasket(storedCartItems);
  }

  return (
    <div>
      <div className="cart-button">
        <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart} /> {props.basket.length}</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        {props.basket.length === 0 ? <BasketEmpty /> :
          <>
            <h2>My Basket</h2>
            {props.basket.map((item, index) => {
              return (<div>
                <img src={item.url} alt="cat on sale" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button className="delete-btn" onClick={() => removeCartItems(index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              </div>)
            })}
            <p>Subtotal:</p>
          </>
        }
      </Modal>
    </div>
  )
}

const BasketEmpty = () => {
  return <h4>Uh oh! Your basket is empty, lets find a furry friend to add!</h4>
}

export default Basket;