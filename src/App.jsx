// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';
import Loading from './Loading';


function App() {

  const { loading } = useGlobalContext()

  if(loading){
    return(
      <div><Loading/></div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
