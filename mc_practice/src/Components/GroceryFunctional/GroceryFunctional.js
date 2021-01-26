// ============ IMPORTS ============
import React, { useReducer } from 'react';
// import { v4 as uuid } from 'uuid';

import logo from '../../logo.svg';
import SearchForm from './serchForm';
import GroceryList from './GroceryList';

import { initialGroceries, groceryReducer } from './Reducer/groceryReducer';
import './GroceryFunctional.css';

// const initialGroceries = [
//   {
//     id: uuid(),
//     item: 'Tortillas',
//     complete: false
//   },
//   {
//     id: uuid(),
//     item: 'Beans',
//     complete: false
//   }
// ]

function GroceryFunctional() {
  // ============ STATE ============
  const [groceriesState, dispatch] = useReducer(groceryReducer, initialGroceries);

  // ============ FUNCTIONS ============
  // const addNewItem = itemName => {
  //   const newItem = {
  //     id: uuid(),
  //     item: itemName,
  //     complete: false
  //   }

  //   setGroceries([...groceries, newItem])
  // }

  // const toggleComplete = itemId => {
  //   const newList = groceries.map(grocery => {
  //     if(itemId === grocery.id) {
  //       return {
  //         ...grocery,
  //         complete: !grocery.complete
  //       }
  //     } else {
  //       return grocery
  //     }
  //   })

  //   setGroceries(newList)
  // }

  // const clearComplete = () => {
  //   const newList = groceries.filter(grocery => grocery.complete === false)

  //   setGroceries(newList)
  // }


  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Grocery List</h1>
      </header>
      <SearchForm dispatch={dispatch} />
      <GroceryList groceries={groceriesState} dispatch={dispatch} />
      {/* <GroceryList groceries={groceriesState} toggleComplete={toggleComplete} clearComplete={clearComplete} /> */}
    </div>
  );

}

export default GroceryFunctional;