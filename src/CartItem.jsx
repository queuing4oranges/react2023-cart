import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useReducer } from 'react';
import { CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE} from './actions';
import  reducer from './reducer';

const CartItem = ({ id, img, title, price, amount }) => {

  // const [ state, dispatch ] = useReducer(reducer, defaultState)
  // console.log(state, dispatch)

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: { id: id} })
  }

  const increaseAmount = () => {
    dispatch({type: INCREASE})
  }

  const decreaseAmount = () => {
    dispatch({type: DECREASE})
  }

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increaseAmount()}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decreaseAmount()}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
