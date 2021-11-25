import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Basket = () =>{
    return (
        <div>
            <button className="basketbtn"><FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    )
}




export default Basket