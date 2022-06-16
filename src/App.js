import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/style.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Auth/RequireAuth';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog';
import Footer from './Components/Shared/Footer';
import NavigationBar from './Components/Shared/NavigationBar';
import Login from './Pages/UserAuth/Login';
import Register from './Pages/Register';
import ViewProduct from './Pages/ViewProduct/ViewProduct';
import Cart from './Pages/Cart/Cart';
import Purchase from './Pages/Purchase/Purchase';
import CheckOut from './Pages/CheckOut/CheckOut';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrders from './Admin/Dashboard/Pages/ManageOrders';
import ProductCategory from './Pages/ProductCategory/ProductCategory';
import AllRecentProduct from './Pages/AllRecentProduct/AllRecentProduct';
import { useState } from 'react';
import SearchProduct from './Components/Shared/SearchProduct';
import RequireOwner from "./Auth/RequireOwner";
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers/outlet/AllUsers';
import OwnerData from './Pages/Dashboard/Owner/OwnerData';
import AllAdmin from './Pages/Dashboard/AllUsers/outlet/AllAdmin';
import ManageUsers from './Pages/Dashboard/AllUsers/ManageUsers';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <NavigationBar setQuery={setQuery}></NavigationBar>
      <SearchProduct query={query}></SearchProduct>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:productId' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='/product/category/:category' element={<ProductCategory></ProductCategory>}></Route>
        <Route path='/product/recent/all' element={<AllRecentProduct></AllRecentProduct>}></Route>
        <Route path='/my-cart' element={<RequireAuth><Cart></Cart></RequireAuth>}></Route>
        <Route path='/product/purchase/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/checkout/:orderId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/my-profile/my-order' element={<RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>

        {/* // Owner path */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='manage-orders' element={<ManageOrders></ManageOrders>}></Route>

          {/* // Only owner route */}
          <Route path='manage-users' element={<RequireOwner><ManageUsers></ManageUsers></RequireOwner>}>
            <Route index element={<RequireOwner><AllUsers></AllUsers></RequireOwner>}></Route>
            <Route path='all-admin' element={<RequireOwner><AllAdmin></AllAdmin></RequireOwner>}></Route>
          </Route>
          <Route path='owner-data' element={<RequireOwner><OwnerData></OwnerData></RequireOwner>}></Route>
        </Route>

        {/* // admin dashboard */}

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
