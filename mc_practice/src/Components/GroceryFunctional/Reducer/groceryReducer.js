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
    switch (action.type) {
        case 'ADD_NEW_GROCERY':
            const newGrocery = {
                id: uuid(),
                item: action.payload,
                complete: false
            }
            return [...state, newGrocery]

        case 'TOGGLE_COMPLETE':
            return state.map((food) => {
                if (food.id === action.payload) {
                    return {
                        ...food,
                        complete: !food.complete
                    }
                }
                return food
            })
        case 'CLEAR_COMPLETE':
            return state.filter(food => food.complete === false)
        default:
            return state
    }
}