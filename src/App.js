import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About-Us/AboutUs';
import Business from './Components/Business/Business';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Options from './Components/Options/Options';
import SignUp from './Components/SignUp/SignUp';
import WealthManager from './Components/Wealth-Manager/WealthManager';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='business' element={<Business></Business>}></Route>
        <Route path='wealth-management' element={<WealthManager></WealthManager>}></Route>
        <Route path='options' element={<Options></Options>}></Route>
        <Route path='about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>


    </div>
  );
}

export default App;
