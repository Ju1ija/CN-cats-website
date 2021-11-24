import { useEffect, useState } from "react";

function Card() {
  const [image, setImage] = useState("");

  useEffect(() => {
    handler();
  }, []);

  const handler = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setImage(data[0].url);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <img src={image} alt="" />
      <h3>Name</h3>
      <button>Price</button>
    </div>
  )
}

export default Card;