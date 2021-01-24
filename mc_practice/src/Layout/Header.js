import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';


function HeaderComponent() {




    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <ul>
                    <li><Link to='/GroceryClass'>Grocery List Class Component</Link></li>
                    <li><Link to='GroceryFunctional'>Grocery List Functional Component</Link></li>
                    <li><Link to='NotesClass'>Notes Class Component</Link></li>
                    <li><Link to='NotesFunctional'>Notes Functional Component</Link></li>
                </ul>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default HeaderComponent;