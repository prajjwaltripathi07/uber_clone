/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom'
import Start from './pages/Start';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import {UserDataContext} from './context/UserContext';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/CaptainLogout';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';


const App = () => {
  
  useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/" element={<Start/>} />
        <Route path="/home" 
             element={
                  <UserProtectWrapper>
                       <Home/>
                  </UserProtectWrapper>
                      } 
        />
        <Route path="/user/logout" 
              element={
              <UserProtectWrapper>
                  <UserLogout/>
              </UserProtectWrapper>
          } />
           <Route path="/captain-home" element={
            <CaptainProtectWrapper>
            <CaptainHome/>
            </CaptainProtectWrapper>
            } />
          <Route path="/captain/logout" 
              element={
              <CaptainProtectWrapper>
                  <CaptainLogout/>
              </CaptainProtectWrapper>
          } />
         



      </Routes>
    </div>
  )
}

export default App;
