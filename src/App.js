import 'bootstrap/dist/css/bootstrap.min.css';

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

