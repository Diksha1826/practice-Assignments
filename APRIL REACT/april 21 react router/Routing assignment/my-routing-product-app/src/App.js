import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import ContactUs from './Pages/ContactUs';
import Faq from './Pages/Faq';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';
import SingleProduct from './Pages/SingleProduct';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='aboutus' element={<Aboutus />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route  path='faq' element={<Faq/>}/>
      <Route path='products' element={<Products />}> 
      </Route> 
      <Route path='shoppingcart' element={<ShoppingCart/>} />
      {/* <Route path='products/*' element={<SingleProduct />} /> */}
      <Route path='singleproduct' element={<SingleProduct />} />
      <Route path='login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;


