import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./components/Card.js"
import { useEffect } from 'react';
import { useState } from 'react';
const faker = require('faker');

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

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
  }

  return (
    <div className="cats-on-sale">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="mainSet">
              <img src={item.url} alt="cat on sale" />
              <h2>{item.name}</h2>
              <h3>£{item.price}</h3>
              <p><a onClick={() => { }}
              >click here to learn more</a></p>
              <button onClick={() => basketHandler(item)}>BUY</button>
            </div> :
            <div className="infoSet">
              <h2>{item.name}</h2>
              <h3>£{item.price}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia orci sapien, at posuere odio condimentum ac. Phasellus ut arcu et orci cursus mattis dignissim id dui.imentum sagittis.</p>
              <button onClick={() => { }}>BACK</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App;

