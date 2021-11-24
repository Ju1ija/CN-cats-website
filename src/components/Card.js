import { useEffect, useState } from "react";

function Card() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState(true);

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
    <div className="container">
    {info ?
      <div className="mainSet">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p><a onClick={() => {setInfo(false)}} 
      href="#">click here to learn more</a></p>
      <button>£</button>
      </div> :
      <div className="infoSet">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia orci sapien, at posuere odio condimentum ac. Phasellus ut arcu et orci cursus mattis dignissim id dui. Duis nec enim a felis porttitor dapibus. Morbi vitae est vitae odio condimentum sagittis. Duis vehicula lacus tortor, at auctor eros ultrices nec.</p>
        <button onClick={() => {setInfo(true)}}>back</button>
      </div>
}
    </div>
  )
}

export default Card;