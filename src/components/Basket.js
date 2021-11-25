import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Basket = () =>{
    
    
    
    const [cookies, setCookie] = useCookies(['']);
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
//   const handle = (props) => {
//     setCookie('Index', props.index, {path: '/'});
//  };

  return (
    <div>
      <button onClick={onOpenModal}><FontAwesomeIcon icon={faShoppingCart}/></button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>My Basket</h2>
        <p></p>
      </Modal>
    </div>
    )
}



export default Basket

 




