import { useEffect, useState } from "react";

function Card() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    imageHandler();
    nameHandler();
  }, []);

  const imageHandler = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setImage(data[0].url);
    } catch (err) {
      console.log(err);
    }
  }

  const nameHandler = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setName(data.results[0].name.first);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <button>Price</button>
    </div>
  )
}

export default Card;