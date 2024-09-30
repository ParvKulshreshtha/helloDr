import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { doctors, url } from '../data/assets';

const MyAppointments = ({ user }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user && user._id) {
      getAppointments();
    } else {
      console.warn("User is not defined or doesn't have an ID");
    }
  }, [user]);

  const getAppointments = async () => {
    try {
      const response = await axios.get(`${url}/appointment/get/${user._id}`);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-9/12 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <ul className="space-y-4">
        {appointments?.map((appointment) => {
          const doctor = doctors?.find(doc => doc._id === appointment.doctor);
          return (
            <li key={appointment._id} className="border p-4 rounded-lg shadow-md flex items-start">
              <img
                src={doctor?.image} 
                alt={`Dr. ${doctor?.name}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{doctor?.name} {`(${doctor?.speciality})`}</h2>
                <p className="text-gray-600">
                  <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()} <br />
                  <strong>Time:</strong> {appointment.time} <br />
                  <strong>Address:</strong> {doctor?.address.line1}, {doctor?.address.line2}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyAppointments;
