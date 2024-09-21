import React from 'react'

import { Link } from 'react-router-dom';
import { doctors } from '../data/assets';




const TopDoctors = () => {
  return (
    <div id='speciality' className="flex flex-col items-center justify-center w-9/12 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Top Doctors to Book </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">Simply browse through our extensive list of trusted doctors.</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {doctors.slice(0,10).map((doctor, index) => (
        <Link 
        to={`/doctor/details/${doctor._id}`} 
          key={doctor._id} 
          className='flex flex-col justify-center items-center my-1 w-full rounded-lg shadow-lg bg-[#EAEFFF] border border-[#C9D8FF]'
        >
            <img 
                src={doctor.image} 
                alt={`Speciality ${doctor.name}`} 
                className="object-cover"
            />
            <div className='flex flex-col justify-start items-start p-4 bg-white w-full rounded-b-lg'> 
              <div className='flex items-center gap-2'>

                <p className='w-2 h-2 bg-green-500 rounded-full'/>
                <p className='text-green-500 font-semibold'>
                    Available
                </p>
              </div>
              <span className='mt-2 text-2xl font-semibold w-full truncate'>
                  {doctor.name}
              </span>
              <span className='text-[#4B5563]'>
                  {doctor.speciality}
              </span>
            </div>
        </Link>
      ))}

      </div>
      <button className='bg-[#EAEFFF] my-8 px-10 py-2 rounded-full'>more</button>

    
    </div>
  )
}

export default TopDoctors
