import React, { useEffect, useState } from 'react'
import { doctors, url } from '../data/assets'
import { useParams } from 'react-router-dom'
import moment from "moment"
import axios from 'axios';

const today = moment();

const DoctorDetails = ({user}) => {
  const [doctorDetails, setDoctorDetails] = useState(null)
  const [dateSelected, setDateSelected] = useState(+today)
  const [timeSelected, setTimeSelected] = useState(null)

  console.log(dateSelected)
  const {docid} = useParams()

  useEffect(()=>{
    setDoctorDetails(doctors.find(doc => doc._id === docid))
  },[])

  const generateDatesArray = () => {
    const dates = [];
  
    for (let i = 0; i < 7; i++) {
      dates.push(today.clone().add(i, 'days').valueOf());
    }
  
    return dates;
  };
  
  const datesArray = generateDatesArray();
  
  const generateTimesArray = () => {
    const startTime = moment('11:00 AM', 'hh:mm A');
    const endTime = moment('7:00 PM', 'hh:mm A');
    const times = [];
  
    while (startTime <= endTime) {
      times.push(startTime.format('hh:mm A'));
      startTime.add(30, 'minutes');
    }
  
    return times;
  };  

  const bookAppointment = async () => {
    const date = moment()
    const bookingDetails = {
      doctor:docid,
      user:user,
      date:dateSelected,time:timeSelected,
      bookingAt:date
    }

    const booking = await axios.post(`${url}/appointment/create`, bookingDetails)
    console.log(bookingDetails)
  }

  const timesArray = generateTimesArray();
  

  return (
    <div>
      {doctorDetails?._id ?
      <>
      
          <div className="flex w-9/12 mx-auto p-4 gap-4">
            <div className="w-3/12  bg-[#5F6FFF] rounded-lg ">
                <img
                  className="  relative bottom-0"
                  src={doctorDetails.image} // Replace with the path to the doctor's image
                  alt="Dr. Andrew Williams"
                />
            </div>
            <div className="w-9/12 flex flex-col border border-gray-300 p-4 rounded-lg">

            <div className=" items-center">
              
              <div className="">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{doctorDetails.name}</h2>
                  <span className="ml-2 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-600">{doctorDetails.speciality} <span className="ml-2 text-gray-400">{doctorDetails.experience}</span></p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">
                {doctorDetails.about}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Appointment fee: <span className="text-gray-900 font-bold">${doctorDetails.fees}</span>
              </p>
            </div>
            </div>
          </div>

          <div className='flex m-5 gap-2 p-4 w-9/12 mx-auto'>
            {datesArray?.map(date => (
              <div
                key={date}
                onClick={() => setDateSelected(date)}
                className={`flex flex-col items-center justify-center py-4 px-8 rounded-3xl cursor-pointer ${
                  (dateSelected && moment(dateSelected).format('dd/mm/yyyy')===moment(date).format('dd/mm/yyyy')) ? 'bg-[#5F6FFF] text-white shadow-sm shadow-[#5F6FFF]' : 'bg-white border border-gray-300 text-gray-900'
                }`}
              >
                <span className={`text-sm ${(dateSelected && moment(dateSelected).format('dd/mm/yyyy')===moment(date).format('dd/mm/yyyy')) ? 'text-white' : 'text-gray-500'}`}>
                  {moment(date).format('ddd').toUpperCase()}
                </span>
                <span className={`font-bold ${(dateSelected && moment(dateSelected).format('dd/mm/yyyy')===moment(date).format('dd/mm/yyyy')) ? 'text-white' : 'text-gray-900'}`}>
                  {moment(date).format('D')}
                </span>
                <span className={`font-bold ${(dateSelected && moment(dateSelected).format('dd/mm/yyyy')===moment(date).format('dd/mm/yyyy')) ? 'text-white' : 'text-gray-500'}`}>
                  {moment(date).format('MMM')}
                </span>
              </div>
            ))}

          </div>

          <div className="flex gap-2 p-4 w-9/12 mx-auto overflow-x-scroll scrollbar-hide">
            {timesArray.map((time, index) => (
              <div
                key={time}
                onClick={() => setTimeSelected(time)}
                className={`flex flex-col items-center justify-center cursor-pointer p-2 flex-shrink-0 rounded-full ${(timeSelected && time===timeSelected) ? "bg-[#5F6FFF] text-white shadow-sm shadow-[#5F6FFF]":"text-gray-500 border border-gray-300"} `}
              >
                <span className={`text-sm`}>{time}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-4 w-9/12 mx-auto overflow-x-scroll scrollbar-hide">
            <button onClick={bookAppointment} className='bg-[#5F6FFF] text-white shadow-sm shadow-[#5F6FFF] rounded-full py-3 px-8'>Book an Appointment</button>
          </div>

      </>

      :
      <>
      Loading...
      </>}
    </div>
  )
}

export default DoctorDetails
