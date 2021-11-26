import './Card.css';
import { useEffect, useState } from "react";
const faker = require('faker');


const Card = (props) => {
  const [info, setInfo] = useState(true);

  return (<div className="container">
    <div key={props.id}>
      {info ? <MainSetItem item={props.item} open={() => { setInfo(false) }} buy={() => props.basketHandler(props.item)} />
        : <InfoSetItem item={props.item} close={() => { setInfo(true) }} />}
    </div>
  </div>)
}

const MainSetItem = (props) => {
  return (<div className="mainSet">
    <img src={props.item.url} alt="cat on sale" />
    <h2>{props.item.name}</h2>
    <h3>£{props.item.price}</h3>
    <p><a onClick={props.open}>click here to learn more</a></p>
    <button onClick={props.buy}>BUY</button>
  </div>)
}

const InfoSetItem = (props) => {
  return (<div className="infoSet">
    <h2>{props.item.name}</h2>
    <h3>£{props.item.price}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia orci sapien, at posuere odio condimentum ac. Phasellus ut arcu et orci cursus mattis dignissim id dui.imentum sagittis.</p>
    <button onClick={props.close}>BACK</button>
  </div>)
}

export default Card;