import './App.css';
import kitchens from './data.json'

function App() { 
  console.log(kitchens)
  return (
    <div className="App">
      {kitchens && kitchens.map(kitchen => {
        const street = kitchen.address.street
        const city = kitchen.address.city
        const state = kitchen.address.state
        const zipCode = kitchen.address.zipCode
        const mainKitchen = kitchen.kitchens.main
        const ghost1 = kitchen.kitchens.ghost1
        const ghost2 = kitchen.kitchens.ghost2
        const totalKitchens = kitchen.totalKitchens

        return (
          <>
          <h1>{mainKitchen}</h1>
          <h2>{`${street}, ${city} ${state}, ${zipCode}`}</h2>
          <h1>{totalKitchens}</h1>
          </>
        )
        })
      }
    </div>
  );
}

export default App;
