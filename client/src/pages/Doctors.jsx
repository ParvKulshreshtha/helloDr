import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { doctors, specialityData } from '../data/assets'

const Doctors = () => {
  const navigate = useNavigate()
  const {speciality} = useParams()
  const doctorsData = doctors.filter(doc => speciality?
    doc.speciality === speciality
    :true)
  return (
    <div className='w-9/12 mx-auto mt-16 min-h-[100vh]'>
      <div className='text-gray-500'>
        {speciality ? <>there are {doctorsData.length} {speciality} available</>:<>there are {15} doctors available</>}
        
      </div>

      <div className='flex '>
        <div className='w-1/6'>
          <div className='flex flex-col'>
            {specialityData?.map((spec, index) => (
              <div key={spec.speciality} onClick={() => navigate(`/doctor/${spec.speciality}`)} className={` mx-4 my-1 px-2 py-1 border border-gray-300 rounded transition-all cursor-pointer ${speciality===spec.speciality && 'bg-[#E2E5FF]'} text-black `}>{spec.speciality}</div>
            ))}
          </div>
        </div>
        <div className='w-5/6'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {doctorsData.map((doctor, index) => (
        <Link 
          to={`/doctor/details/${doctor._id}`} 
          key={doctor._id} 
          className='flex flex-col justify-center items-center my-1 w-full rounded-lg shadow-lg bg-[#EAEFFF] border border-[#C9D8FF]'
        >
            <img 
                src={doctor.image} 
                alt={`Speciality ${doctor.name}`} 
                className="object-cover"
                loading='lazy'
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
        </div>
      </div>
    </div>
  )
}

export default Doctors
