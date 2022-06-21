import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css'


function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Landing/>
      </Route>
      
    </div>
  );
}

export default App;
