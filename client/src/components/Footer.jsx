import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-28 bottom-0">
      <div className="container mx-auto px-4 w-9/12">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-4/12 mb-6 md:mb-0 px-4">
            <h2 className="text-lg font-bold mb-4">Hello Dr</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-1/6 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-1/6  mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2 text-sm">123 Street Name</li>
              <li className="mb-2 text-sm">City, State, ZIP</li>
              <li className="mb-2 text-sm">Email: info@example.com</li>
              <li className="mb-2 text-sm">Phone: (123) 456-7890</li>
            </ul>
          </div>

        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
