import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Doctors from './pages/Doctors';
import LoginPage from './pages/LoginPage';
import MyAppointments from './pages/MyAppointments';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DoctorDetails from './pages/DoctorDetails';
import axios from 'axios';
import { url } from './data/assets';

export default function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate()


  useEffect(async () => {
    const token = localStorage.getItem('token');
    setToken(token)
    getUser(token)
  }, []);

  const getUser = async (token) => {
    console.log("Token:", token);
    try {
        const response = await axios.get(`${url}/users/getuserbytoken`, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        
        console.log(response)
        if(response.data.data === "Token expired") {
            localStorage.removeItem('token'); 
            navigate("/login")
        }else{
          setUser(response.data.user)
        }

    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; 
    }
};


  return (
    <div className="">
      <Nav user={user} token={token} />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<DoctorDetails user={user} />} path='/doctor/details/:docid' />
        <Route element={<Contacts />} path='/contacts' />
        <Route element={<Doctors />} path='/doctor' />
        <Route element={<Doctors />} path='/doctor/:speciality' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<MyAppointments user={user} />} path='/myappointments' />
        <Route element={<Profile user={user}/>} path='/profile' />
        <Route element={<SignUp />} path='/signup' />
      </Routes>
      <Footer />
    </div>
  );
}
