import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import {Navbar} from './components/navbar'
import {Cart} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import {  ShopContextProvider } from './context/shop-context';


 const App = () => {
  return (
    <div>
<ShopContextProvider /*we have to wrap every thing with shopcontext, since its duty:


*/      > 
    <Router>
      <Navbar /*we put the navbar above the <routes>,so it will be present in every single Route,where every thing inside <Routes> when <Route>change here we have 2 routes,this is due to library 'react-router-dom'*/ /> 
      <Routes>
      <Route path='/'/*pathof single slash is the main page of the website*/ element={<Shop/>} /*the component to be rendered ,must be assinged to element in Route  */ />
      <Route path='/cart'/*cart is the another page*/ element={<Cart/>}   />
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  )
}
export default App;