import { Children, createContext, useContext, useReducer } from "react";

const CartContext = createContext()

const initialState = {
    cart: []
}


function reducer (state, action) {
    switch(action.type){
        case "ADD" : 
        return {...state, cart: [...state.cart, action.items]};

        case "REMOVE" :
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.items)
            }

        default:
            return state
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)