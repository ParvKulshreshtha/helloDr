import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import profile from '../assets/assets_frontend/profile_pic.png'
import dropdown from '../assets/assets_frontend/dropdown_icon.svg'

const Nav = ({token}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('token'); 

      navigate("/login");
      window.location.reload()
    };
  
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center mx-4">
            helloDr
        </div>
        <ul className="flex space-x-6">
          <NavLink to={"/"}>
            <li className="relative group">
                Home
            </li>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden"/>
          </NavLink>
          <NavLink to="/doctor">
            <li className="relative group">
                Top Doctors
            </li>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden"/>
          </NavLink>
          <NavLink to="/about">
            <li className="relative group">
                About
            </li>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden"/>
          </NavLink>
          <NavLink to="/contacts">
            <li className="relative group">
                Contact
            </li>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden"/>
          </NavLink>
        </ul>
        <div className='mx-4'>
            {
                token ? 
                <div className="flex items-center gap-2 relative cursor-pointer">
                    <img  onClick={() => setMenuOpen(open => !open)} src={profile} alt="profilr" className="w-8 rounded-full" />
                    <img  onClick={() => setMenuOpen(open => !open)} src={dropdown} alt="Dropdown" className="w-2.5" />
                        {menuOpen && (
                        <div className="absolute top-0 right-0 mt-14 w-48 bg-white border rounded shadow-lg">
                            <div className="py-2">
                            <p onClick={() => {
                                navigate("profile")
                                setMenuOpen(false)
                            }} className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</p>
                            <p onClick={() => {
                                navigate("myappointments")
                                setMenuOpen(false)
                            }} className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">My Appointments</p>
                            <p onClick={handleLogout} className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</p>
                            </div>
                        </div>
                        )}
                    </div>
                : 
                <button onClick={()=>navigate("login")} className="bg-purple-600 text-white py-2 px-5 rounded-full hover:bg-purple-700">
                    Create account
                </button>
            }
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
