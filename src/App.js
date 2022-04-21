import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Menu from './components/Menu/Menu';
import Reservaion from './components/Reservation/Reservation';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Profile from './components/Profile/Profile';
import AdminViewBookings from './components/AdminViewBookings/AdminViewBookings'
import AdminAddMenu from './components/AdminAddMenu/AdminAddMenu'
import AdminViewMenu from './components/AdminViewMenu/AdminViewMenu'
import AdminAddFood from './components/AdminAddFood/AdminAddFood'
import AdminViewFood from './components/AdminViewFood/AdminViewFood'
import AdminLogin from './components/AdminLogin/AdminLogin'
import AdminNavbar from './components/AdminNavbar/AdminNavbar'
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/reservation' element={<Reservaion />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/adminviewbookings' element={<AdminViewBookings />}></Route>
        <Route path='/adminaddmenu' element={<AdminAddMenu />}></Route>
        <Route path='/adminviewmenu' element={<AdminViewMenu />}></Route>
        <Route path='/adminaddfood' element={<AdminAddFood />}></Route>
        <Route path='/adminviewfood' element={<AdminViewFood />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/admindashboard' element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
