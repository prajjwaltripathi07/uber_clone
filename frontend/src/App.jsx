// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import {UserDataContext} from './context/UserContext';


const App = () => {
  
  useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
