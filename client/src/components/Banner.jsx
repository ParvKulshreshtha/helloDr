import React from 'react';
import group_profile from '../assets/assets_frontend/group_profiles.png';
import arrow_icon from '../assets/assets_frontend/arrow_icon.svg';
import header_img from '../assets/assets_frontend/header_img.png';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-end justify-between px-16 bg-[#5F6FFF] w-10/12 mx-auto m-2 rounded-3xl">
      {/*  ---------Left Side ------  */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-4xl font-bold text-white mb-4">
          Your Health, Your Schedule: 
          <br/>
          Effortless Doctor Booking
        </p>
        <div className="flex flex-col items-end md:items-center md:flex-row md:gap-4 mb-4">
          <img src={group_profile} alt="group profile" className="h-12"/>
          <p className="text-sm text-white">
            Effortless Booking, Personalized Care, and Real-Time Availability
            <br/>
            Connecting You with the Best Doctors, Made Easy
          </p>
        </div>
        <a href="#speciality" className="inline-flex items-center px-4 py-3 bg-white text-gray-500 rounded-full hover:bg-blue-600 hover:text-white">
          Book Appointment <img src={arrow_icon} className="ml-2"/>
        </a>
      </div>
      
      {/*  ---------Right Side ------  */}
      <div className="md:w-1/2 relative">
        <img src={header_img} alt="two lady doctors in headers" className=" md:absolute  bottom-0 sm:block"/>
      </div>
    </div>
  );
}

export default Header;
