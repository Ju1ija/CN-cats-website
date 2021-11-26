import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./components/Card.js"
import { useEffect } from 'react';
import { useState } from 'react';
import Basket from './components/Basket';

const faker = require('faker');

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
      const data = await response.json();
      setInfo(new Array(20).fill(true))
      setData(data.map((item =>
      ({
        url: item.url,
        name: faker.name.firstName(),
        price: faker.finance.amount()
      }))));
    } catch (err) {
      console.log(err);
    }
  }

  const basketHandler = (item) => {
    alert(item)
    setBasket([...basket, item]);
  }

  const infoHandler = (id, isOpen) => {
    let arr = info
    arr[id] = isOpen
    setInfo(arr)
    alert(info)
  }

  return (
    <div>
      <Basket basketItems={basket} />
      <div className="cats-on-sale">
        {data.map((item, id) => {
          return (
            <CatCard item={item} id={id} basketHandler={basketHandler} />
          )
        })}
      </div>
    </div>
  )
}

const CatCard = (props) => {
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

export default App;

