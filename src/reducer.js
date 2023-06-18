import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";

//creating new Map instance from cartItems data
// const cartMap = new Map(cartItems);
// const cartArray = Array.from(cartMap.entries());
// const amount = cartArray.length;

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_ITEM) {
    //simple data structures: passed by value
    //complex data structures: passed by reference
    //(that is why we're taking the value, updating it, then setting it to the value)
    //so basically making a new isntance, then updating
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    //use id to grab that item with Map method
    const item = newCart.get(itemId);
    //once having the item, it needs to be overwritten:
    const newItem = { ...item, amount: item.amount + 1 };
    //now set it to newCart (key=itemID, value=newItem)
    newCart.set(itemId, newItem);
    console.log(newCart);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    // return { ...state, amount: amount.set(amount - 1) };
  }
  throw new Error(`no matching "${action.type}" - action type`);
};

export default reducer;
