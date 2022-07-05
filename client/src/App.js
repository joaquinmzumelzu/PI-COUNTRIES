import { Route } from 'react-router-dom';
import Landing from './components/Landing';
// import './App.css'
// import Card from './components/Card';
import Home from './components/Home';
import Activity from './components/Activity';
import Country from './components/Country';
import Header from './components/Header';
import Filters from './components/Filters';


function App() {
  return (
    <div >
      <Route exact path='/'>
        <Landing/>
      </Route>

      <Route path={`/countries`}>
        <Header/>
      </Route>     

      <Route exact path='/countries'>
        <Home/>
      </Route>

      <Route exact path='/activity'>
        <Header/>
        <Activity/>
      </Route>



      <Route exact path='/countries/:id'>
        <Country/>
      </Route>

    </div>
  );
}

export default App;
