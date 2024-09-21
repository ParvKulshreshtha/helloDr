import React from 'react'
import about_image from "../assets/assets_frontend/about_image.png"

const About = () => {
  return (
    <div className='flex w-9/12 mx-auto mt-10 gap-4 items-center justify-center'>
      <div className='w-4/12'>
        <img src={about_image} />
      </div>
      <div className='w-8/12 rounded-lg p-4'>
      HelloDr is your go-to platform for seamless healthcare access, connecting patients with trusted medical professionals at the click of a button. With an intuitive interface, HelloDr simplifies the process of booking appointments, enabling users to find the right doctor based on specialty, location, and availability. Our mission is to empower individuals to take charge of their health by making quality care accessible and convenient. Whether you need a routine check-up or specialized treatment, HelloDr ensures a hassle-free experience, allowing you to focus on what truly matters—your well-being.
      <br/>
      At HelloDr, we prioritize patient comfort and satisfaction by offering features like virtual consultations, appointment reminders, and easy access to medical records. Our platform also includes user reviews and ratings, helping you make informed decisions about your healthcare providers. With a commitment to innovation and quality, HelloDr is continuously evolving to meet the needs of patients and doctors alike, ensuring a reliable and efficient healthcare experience for everyone. Join us in transforming the way you approach your health—conveniently and confidently.
      </div>
    </div>
  )
}

export default About
