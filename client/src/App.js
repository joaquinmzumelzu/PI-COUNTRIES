import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
// import './App.css'
// import Card from './components/Card';
import Home from './components/Home';
import Activity from './components/Activity';
import Country from './components/Country';
import Header from './components/Header';
import ErrorPath from './components/ErrorPath';



function App() {
  return (
    <div >
      <Switch>

      <Route exact path='/'>
        <Landing/>
      </Route>   

      <Route exact path='/countries'>
        <Header/>
        <Home/>
      </Route>

      <Route exact path='/activity'>
        <Header/>
        <Activity/>
      </Route>



      <Route exact path='/countries/:id'>
        <Header/>
        <Country/>
      </Route>

      <Route path ='/'>
        
        <ErrorPath/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
