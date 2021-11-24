import './App.css';
import Card from "./components/Card.js"

function App() {

  const numOfCards = new Array(12).fill();

  return (
    <div className="cats-on-sale">
      {numOfCards.map((index) => {
        return (
          <div key={index}>
            <Card />
          </div>
        )
      })}
    </div>
  )
}

export default App;
