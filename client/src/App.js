import { Route } from 'react-router-dom';
import Landing from './components/Landing';
// import './App.css'
// import Card from './components/Card';
import Home from './components/Home';


function App() {
  return (
    <div >
      <Route exact path='/'>
        <Landing/>
      </Route>
      {/* <Route exact path='/countries'>
        <Card name ='Chile' img='https://flagcdn.com/cl.svg' continent='South America' />
      </Route> */}

      <Route exact path='/countries'>
        <Home/>
      </Route>

    </div>
  );
}

export default App;
