import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import emptyBasket from "../emptyBasket.png"
import './Basket.css';

const Basket = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



  let removeCartItems = (index, item) => {
    let storedCartItems = [...props.basket];
    storedCartItems.splice(index, 1);
    props.setBasket(storedCartItems);
    let currentCost = props.totalCost - Number(item.price);
    props.setTotalCost(currentCost);
  }
//               .---. .---. 
//              :     : o   :    me want cookie!
//          _..-:   o :     :-.._    /
//      .-''  '  `---' `---' "   ``-.    
//    .'   "   '  "  .    "  . '  "  `.  
//   :   '.---.,,.,...,.,.,.,..---.  ' ;
//   `. " `.                     .' " .'
//    `.  '`.                   .' ' .'
//     `.    `-._           _.-' "  .'  .----.
//       `. "    '"--...--"'  . ' .'  .'  o   `.
//       .'`-._'    " .     " _.-'`. :       o  :
//     .'      ```--.....--'''    ' `:_ o       :
//   .'    "     '         "     "   ; `.;";";";'
//  ;         '       "       '     . ; .' ; ; ;
// ;     '         '       '   "    .'      .-'
// '  "     "   '      "           "    _.-'
  return (
    <div>
      <div className="cart-button">
        <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart} /> {props.basket.length}</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        {props.basket.length === 0 ? <BasketEmpty /> :
          <div className="basket">
            <h2>My Basket</h2>
            {props.basket.map((item, index) => {
              return (<div className="cart-item">
                <img src={item.url} alt="cat on sale" />
                <p>{item.name}</p>
                <p>£{item.price}</p>
                <button className="delete-btn" onClick={() => removeCartItems(index, item)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              </div>)
            })}
            <h4>Subtotal: £{(props.totalCost).toFixed(2)}</h4>
          </div>
        }
      </Modal>
    </div>
  )
}

const BasketEmpty = () => {
  return (
    <div className="empty-basket">
      <h4>Uh oh! Your basket is empty, lets find a furry friend to add!</h4>
      <img src={emptyBasket} alt="" />
    </div>
  )
}

export default Basket;