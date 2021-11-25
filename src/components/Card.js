import './Card.css';
import { useEffect, useState } from "react";
const faker = require('faker');

function Card() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState(true);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    imageHandler();
    nameHandler();
    priceHandler();
  }, []);

  const imageHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setImage(data[0].url);
      setLoading(false);
    } catch (err) {
      setErrorState({ error: true, message: err.message });
    }
  }

  const nameHandler = () => {
    const name = faker.name.firstName();
    setName(name);
  }

  const priceHandler = () => {
    const catPrice = faker.finance.amount();
    setPrice(catPrice);
  }

  return (
    <div className="container">
      {info ?
        <div className="mainSet">
          {errorState.error ? <h3>{errorState.message}</h3>
            : loading ? <div className="loader"></div>
              : <img src={image} alt="cat on sale" />
          }
          <h3>{name}</h3>
          <p>£{price}</p>
          <p><a onClick={() => { setInfo(false) }}
          >click here to learn more</a></p>
          <button>Buy</button>
        </div> :
        <div className="infoSet">
          <h2>{name}</h2>
          <p>£{price}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia orci sapien, at posuere odio condimentum ac. Phasellus ut arcu et orci cursus mattis dignissim id dui. Duis nec enim a felis porttitor dapibus. Morbi vitae est vitae odio condimentum sagittis. Duis vehicula lacus tortor, at auctor eros ultrices nec.</p>
          <button onClick={() => { setInfo(true) }}>back</button>
        </div>
      }
    </div>
  )
}

export default Card;