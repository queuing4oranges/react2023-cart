import { useContext, createContext, useState, useReducer } from "react";
import { CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import reducer from "./reducer";
import cartItems from "./data";

const GlobalContext = createContext();

const newCartItems = cartItems.map((item) => [item.id, item])
console.log(newCartItems)

//set up initial state as an object instead of array, as you can add more properties of diff. kind
const initialState = {
    loading: false, 
    cart: new Map(newCartItems),    
    //set up diff as it has other data structure
}


export default function AppContext(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
    dispatch({type: CLEAR_CART})
  }

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: { id: id} })
  }

  const increaseAmount = (id) => {
    dispatch({type: INCREASE, payload: { id: id}})
  }

  const decreaseAmount = (id) => {
    dispatch({type: DECREASE, payload: { id: id}})
  }
 
    return (
        //state = initial values of initialState
        <GlobalContext.Provider value={{ ...state, clearCart, removeItem, increaseAmount, decreaseAmount}}>  
            {props.children}
        </GlobalContext.Provider>
    )
       
}

export const useGlobalContext = () => useContext(GlobalContext)