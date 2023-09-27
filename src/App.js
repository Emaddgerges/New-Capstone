import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Uitlty/NavBar';
import ProductDetails from './components/ProductDetails'
import Login from './components/Login';
import ErrorNotFound from './components/ErrorNotFound';
import HomePage from './components/HomePage';
import ShoppingCartProvider from './components/Context/ShoppingCartContext';
import Searchbox from './components/Uitlty/Searchbox';
import ProductDetails2 from './components/ProductDetails2.js';
import AuthProvider from './components/Context/AuthContext';
import Cart from './components/cart';

function App() {

  return (
    
    <div className="App" >
     
      <NavBar />
       
      <Routes>
      
      <Route path="/Cart" element={<Cart />} /> 
      <Route path="product/:productId" element={<ProductDetails />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path="*" element={<ErrorNotFound />}  /> 
      <Route path='/Searchbox' element={<Searchbox />} />
      <Route path='/Searchbox/product/:productId' element={<ProductDetails2 />} />
      <Route path="/Login" element={<Login />} /> 
  
      </Routes>
    
    </div>
    
  )
  
}

function AppWithStore(){
   return(
     <AuthProvider>

      <App />

     </AuthProvider>
    )}
export default AppWithStore;

