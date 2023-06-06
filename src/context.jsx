import { useContext, createContext, useState, useReducer } from "react";
import { CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import reducer from "./reducer";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

export const defaultState = {
    loading: false,
    cart: []
}

export default function AppContext(props) {
    const [state, dispatch] = useReducer(reducer, defaultState)


    return (
        <GlobalContext.Provider value={{ ...state}}>
            {props.children}
        </GlobalContext.Provider>
    )



}