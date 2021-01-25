import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import HeaderComponent from './Layout/Header';
import FooterComponent from './Layout/Footer';

import { GroceryClass } from './Components/GroceryClass';
import { GroceryFunctional } from './Components/GroceryFunctional';
import { NotesClass } from './Components/NotesClass';
import { NotesFunctional } from './Components/NotesFunctional';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
          <Route path='/GroceryClass'>
            <GroceryClass />
          </Route>
          <Route path='/GroceryFunctional'>
            <GroceryFunctional />
          </Route>
          <Route path='/NotesClass'>
            <NotesClass />
          </Route>
          <Route path='/NotesFunctional'>
            <NotesFunctional />
          </Route>
          <h1>The App</h1>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
