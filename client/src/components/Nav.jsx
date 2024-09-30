import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import profile from '../assets/assets_frontend/profile_pic.png';
import dropdown from '../assets/assets_frontend/dropdown_icon.svg';

const Nav = ({ token }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(open => !open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          <span className="text-xl font-bold ml-4">helloDr</span>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:space-x-6 ${mobileMenuOpen ? 'flex' : 'hidden'} md:items-center mx-auto md:static absolute top-14 left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none md:p-0 p-4`}>
            <NavLink to="/" className="block py-2 px-4 md:py-0">
          <li className="relative group hover:text-blue-500">
          Home
          </li>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden group-hover:block" />
            </NavLink>
          <li className="relative group">
            <NavLink to="/doctor" className="block py-2 px-4 md:py-0">Top Doctors</NavLink>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden group-hover:block" />
          </li>
          <li className="relative group">
            <NavLink to="/about" className="block py-2 px-4 md:py-0">About</NavLink>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden group-hover:block" />
          </li>
          <li className="relative group">
            <NavLink to="/contacts" className="block py-2 px-4 md:py-0">Contact</NavLink>
            <hr className="border-none outline-none bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden group-hover:block" />
          </li>
        </ul>
        <div className='mx-4'>
          {
            token ?
              <div className="flex items-center gap-2 relative cursor-pointer">
                <img onClick={() => setMenuOpen(open => !open)} src={profile} alt="profile" className="w-8 rounded-full" />
                <img onClick={() => setMenuOpen(open => !open)} src={dropdown} alt="Dropdown" className="w-2.5" />
                {menuOpen && (
                  <div className="absolute top-12 right-0 w-48 bg-white border rounded shadow-lg">
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
              <button onClick={() => navigate("login")} className="bg-purple-600 text-white py-2 px-5 rounded-full hover:bg-purple-700">
                Create account
              </button>
          }
        </div>
      </div>
    </nav>
  );
}

export default Nav;
