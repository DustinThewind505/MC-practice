import { v4 as uuid } from 'uuid';



export const initialGroceries = [
    {
      id: uuid(),
      item: 'Tortillas',
      complete: false
    },
    {
      id: uuid(),
      item: 'Beans',
      complete: false
    }
]


export const groceryReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_GROCERY':
            const newGrocery = {
                id: uuid(),
                item: action.payload,
                complete: false
            }
            return [...initialGroceries, newGrocery]
        default:
            return state
    }
}