import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { propTypes } from 'react-bootstrap/esm/Image';

const Basket = (props) => {



  const [cookies, setCookie] = useCookies(['']);
  const [open, setOpen] = useState(false);


  const onOpenModal = () => {
    console.log(props.basketItems)
    setOpen(true);
  }
  const onCloseModal = () => setOpen(false);

  //   const handle = (props) => {
  //     setCookie('Index', props.index, {path: '/'});
  //  };

  return (
    <div>
      <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart} /></button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>My Basket</h2>
        {props.basketItems.map((item) => {
          return (<div>
            <img src={item.url} alt="cat on sale" />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>)
        })
        }
      </Modal>
    </div>
  )
}



export default Basket






