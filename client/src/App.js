import { Route } from 'react-router-dom';
import Landing from './components/Landing';
// import './App.css'
// import Card from './components/Card';
import Home from './components/Home';
import Activity from './components/Activity';


function App() {
  return (
    <div >
      <Route exact path='/'>
        <Landing/>
      </Route>
     

      <Route exact path='/countries'>
        <Home/>
      </Route>

      <Route exact path='/activity'>
        <Activity/>
      </Route>

    </div>
  );
}

export default App;
