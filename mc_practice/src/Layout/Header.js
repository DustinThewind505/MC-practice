import React from 'react';
import logo from '../logo.svg';


function HeaderComponent() {




    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <ul>
                    <li>Grocery List Class Component</li>
                    <li>Grocery List Functional</li>
                    <li>Notes Component</li>
                    <li>Notes Class Component</li>
                </ul>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default HeaderComponent;