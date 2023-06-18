import { useContext, createContext, useEffect, useReducer } from "react";
import { CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import reducer from "./reducer";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project"
const GlobalContext = createContext();

//set up initial state as an object instead of array, as you can add more properties of diff. kind
const initialState = {
    loading: false, 
    cart: new Map(),    
    //set up diff as it has other data structure
}

export default function AppContext(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    //get total amount
    const { totalAmount, totalCost } = getTotals(state.cart)

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

  //setting up fetch
  const fetchData = async() => {
    //when starting to fetch - set loading to true:
    dispatch({ type: LOADING})
    const response = await fetch(url);
    const cart = await response.json();
    //now, display the items
    dispatch({ type: DISPLAY_ITEMS, payload: {cart: cart}})
  }

  useEffect (()=>{
    fetchData()
    }, [])
 
    return (
        //state = initial values of initialState
        <GlobalContext.Provider 
        value={{ 
            ...state, 
            clearCart, 
            removeItem, 
            increaseAmount, 
            decreaseAmount, 
            totalAmount, 
            totalCost 
            }}>  
            {props.children}
        </GlobalContext.Provider>
    )
       
}

export const useGlobalContext = () => useContext(GlobalContext)