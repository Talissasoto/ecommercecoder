import './App.css';
import ItemListContainer  from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import ItemDetailContainer  from './components/ItemDetailContainer';
import Cart  from './components/Cart';

function App() {
  return (
    <>
  <NavBar />
   <ItemListContainer />
   <ItemDetailContainer />
   <Cart />
  </>

  );
}

export default App;
