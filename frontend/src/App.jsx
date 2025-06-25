import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className='min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-r from-pink-300 to-yellow-50 '>

      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection></Collection>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/product/:productId' element={<Product></Product>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}/>
        <Route path='/orders' element={<Orders></Orders>}/>

      </Routes>

      <Footer/>
      
    </div>
  )
}

export default App
