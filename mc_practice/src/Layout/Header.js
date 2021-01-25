import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../logo.svg';


function HeaderComponent() {
    const { pathname } = useLocation();



console.log(pathname)
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <ul>
                    <li><NavLink to='/GroceryClass'>Grocery List Class Component</NavLink></li>
                    <li><NavLink to='GroceryFunctional'>Grocery List Functional Component</NavLink></li>
                    <li><NavLink to='NotesClass'>Notes Class Component</NavLink></li>
                    {pathname === '/NotesClass' ? <li><NavLink to='GroceryFunctional'>☰ Grocery List Functional Component</NavLink></li> : null}
                    <li><NavLink to='NotesFunctional'>Notes Functional Component</NavLink></li>
                    {pathname === '/NotesFunctional' ? <li><NavLink to='GroceryClass'>☰ Grocery List Class Component</NavLink></li> : null}
                </ul>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default HeaderComponent;