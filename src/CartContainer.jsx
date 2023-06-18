import CartItem from './CartItem';
import cartItems from './data';
import { useGlobalContext } from './context';


const CartContainer = () => {
  //getting the car from the useGlobalContext
  const { cart, clearCart } = useGlobalContext();

  //to get an array to iterate over for rendering, we need to use Array.from
  //entries = gives us both - key AND value and not just single
  const cartArray = Array.from(cart.entries())
  


  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          //destructuring for readability:
          const [id, item] = cartItem
          //not spreading out cartItem but Item (it's nested!)
           return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
