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
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    return { ...state, amount: amount.set(amount + 1) };
  }
  if (action.type === DECREASE) {
    return { ...state, amount: amount.set(amount - 1) };
  }
  throw new Error(`no matching "${action.type}" - action type`);
};

export default reducer;
