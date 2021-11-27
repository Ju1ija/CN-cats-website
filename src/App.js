import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./components/Card.js"
import { useEffect, useState } from 'react';
import Basket from './components/Basket';
const faker = require('faker');

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
      const data = await response.json();
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
    let currentCost = totalCost + Number(item.price);
    setTotalCost(currentCost);
  }

  return (
    <div>
      <Basket basket={basket} setBasket={setBasket} totalCost={totalCost} setTotalCost={setTotalCost} />
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

