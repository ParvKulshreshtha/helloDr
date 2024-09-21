import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../data/assets';

const Speciality = () => {
  return (
    <div id='speciality' className="flex flex-col items-center justify-center p-16 w-9/12 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Find by Speciality </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">Simply browse through our extensive list of trusted doctors, schedule <br/> your appointment hassle-free.</h2>
      <div className="flex overflow-x-auto space-x-4">
        {specialityData.map((item, index) => (
            <Link key={item.speciality} to={`/doctor/${item.speciality}`} className='flex flex-col justify-center items-center'>

                <img 
                    key={item.speciality} 
                    src={item.image} 
                    alt={`Speciality ${item.speciality}`} 
                    className="w-25 h-25 object-cover m-4"
                />
                <span className=''>
                    {item.speciality}
                </span>
            </Link>
          
        ))}

      </div>
    </div>
  );
}

export default Speciality;
