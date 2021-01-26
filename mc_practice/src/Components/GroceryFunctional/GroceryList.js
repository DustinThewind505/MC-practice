// ============ IMPORTS ============
import React from 'react';
import Grocery from './Grocery';


function GroceryList(props) {


    // ============ COMPONENT ============
    return (
        <>
            <div className='grocery-list'>
                {props.groceries.map(element => <Grocery grocery={element} dispatch={props.dispatch} />)}
            </div>
            <button onClick={() => props.dispatch({ type: 'CLEAR_COMPLETE'})}>Clear</button>
        </>
    )
}

export default GroceryList;