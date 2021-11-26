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
            <Card item={item} id={id} basketHandler={basketHandler} />
          )
        })}
      </div>
    </div>
  )
}

export default App;

