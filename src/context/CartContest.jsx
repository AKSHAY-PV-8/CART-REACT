import { createContext, useContext, useReducer } from "react";


const CartContext = createContext();

const initailValue = {
    cart: []
}

function reducer (state, action){
    switch(action.type){
        case "ADD":
            { const existing = state.cart.find(item => item.id === action.payload.id);
            
            if(existing){
                return {...state, 
                    cart: state.cart.map(item => item.id === action.payload.id ?
                        {...item, qty: item.qty + 1} : item
                    )
                }
            }
            return{
                ...state, cart: [...state.cart, {...action.payload, qty: 1}]
            } }

        case "REMOVE":
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)}

        case "COUNT+":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? 
                    {...item, qty: item.qty +1} : item
                )
            }
        case "COUNT-":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? 
                    {...item, qty: item.qty -1} : item
                )
            }
        default:
            return state 
    }
}

export const CartContetProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initailValue)

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)