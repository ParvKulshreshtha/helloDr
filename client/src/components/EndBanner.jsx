import React from 'react';
import group_profile from '../assets/assets_frontend/group_profiles.png';
import arrow_icon from '../assets/assets_frontend/arrow_icon.svg';
import header_img from '../assets/assets_frontend/header_img.png';
import appointment from "../assets/assets_frontend/appointment_img.png"

const EndBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-end justify-between px-16 bg-[#5F6FFF] w-9/12 mx-auto m-2 rounded-lg">
      {/*  ---------Left Side ------  */}
      <div className="md:w-8/12 flex flex-col items-start justify-center gap-4 mx-auto md:py-16 ">
        <p className="text-5xl font-bold text-white mb-4 leading-relaxed" >
            Book Appointment  <br/>
            With 100+ Trusted Doctors
        </p>
        <a href="" className="inline-flex items-center px-6 py-3 bg-white rounded-full hover:bg-blue-600 hover:text-white">
          Create Account
        </a>
      </div>
      
      {/*  ---------Right Side ------  */}
      <div className="md:w-4/12 relative">
        <img src={appointment} alt="" className=" md:absolute  bottom-0 sm:block scale-[1.04] -translate-y-2"/>
      </div>
    </div>
  );
};

export default EndBanner;
