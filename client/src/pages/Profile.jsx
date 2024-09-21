import React from 'react';
import profile from '../assets/assets_frontend/profile_pic.png'


const Profile = ({user}) => {
  const {name, email} = user
  console.log(user)
  const imageUrl = "https://via.placeholder.com/150"; // Placeholder image

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img 
        src={profile} 
        alt="Profile" 
        className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4"
      />
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default Profile;
