import './App.css';
import NavBar from './Component/NavBar/NavBar';
// import SideBar from './Component/SideBar/SideBar';
import AddProducts from './Pages/AddProducts';
import Home from './Pages/Home.js';
import ProductsDetails from './Pages/ProductsDetails.js';
import Products from './Pages/Products';
import { Route, Routes } from 'react-router-dom';
import SidewBar from './Component/SideBar/SideBar.js';
import UpdateProducts from './Pages/UpdateProducts.js';
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className='parent'>
          <div className='left-child'>
            <SidewBar />
          </div>
          <div className='right-child'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Products' element={<Products />} />
              <Route path='Products/add' element={<AddProducts />} />
              <Route path='Products/:ProductsID' element={<ProductsDetails />} />
              <Route path='UpdateProducts/:id' element={<UpdateProducts />} />
            </Routes>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
