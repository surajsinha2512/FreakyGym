import './App.css';
import Home from './components/Home';
import GymWallpaper from './assets/GymWallpaper.jpeg'
import Card from './components/Card';

function App() {
  const gymPackagesOffer = [
    {
      id: 1,
      description: "Get Subscription",
      value: "Single Center",
      cost: "999/- Rs"
    },
    {
      id: 2,
      description: "Get Subscription",
      value: "All Center",
      cost: "1399/- Rs"
    },
    {
      id: 3,
      description: "Get Subscription",
      value: "Home Workout session",
      cost: "1000/- Rs"
    }
  ]
  return (
    <div className="App" style={{position: "relative", height: "100%", width: "100%"}}>
       <img src={GymWallpaper} style={{height: "100vh", width: "100%", }}></img>
      <Home/>
      <div style={{position: 'absolute', top: "50%", left: "10%", display: "flex", flexDirection: "row"}}>
      {gymPackagesOffer.map((value)=> {
        return (
          <div> 
          <Card data={value}/>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
