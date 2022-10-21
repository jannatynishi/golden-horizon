import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About-Us/AboutUs';
import Business from './Components/Business/Business';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Options from './Components/Options/Options';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';
import WealthManager from './Components/Wealth-Manager/WealthManager';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/business' element={<Business></Business>}></Route>
        <Route path='/wealth-management' element={
          <RequireAuth>
            <WealthManager></WealthManager>
          </RequireAuth>
        }></Route>
        <Route path='/options' element={<Options></Options>}></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
        <Footer></Footer>

    </div>
  );
}

export default App;
