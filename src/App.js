import './App.css';

function App() {
  const data = fetch('restaurants.json')
  const res = data.JSON()
  console.log(res)
  return (
    <div className="App">

    </div>
  );
}

export default App;
