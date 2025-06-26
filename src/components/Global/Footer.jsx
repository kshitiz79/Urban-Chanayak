import React from 'react';
import { MapPin, Mail, Phone } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6'; // Add this import
import {  FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // For social icons

const Footer = () => {
  return (

    <>

 
 
    <div className=" text-white  min-h-[200px] flex bg-black z-50 items-center">
      <div className="  w-full">
       

        {/* Footer Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-gradient-to-b from-gray-950 to-black py-20  px-20 z-50 max-w-full mx-auto">

          {/* Contact Info */}
          <div className="col-span-1">
            <img src="https://urbanchanakya.in/wp-content/uploads/2024/04/logo-uc.png" alt="" />
           
            {/* Social Icons */}
            <div className="flex space-x-4 ml-4 mt-4 ">
            <a href="https://x.com/ChanakyaUrban" className="text-gray-400 hover:text-orange-500">
  <FaXTwitter size={20} />
</a>
              <a href="https://www.linkedin.com/company/urbanchanakya/?originalSubdomain=in" className="text-gray-400 hover:text-orange-500">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/chanakyaurban" className="text-gray-400 hover:text-orange-500">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/urbanchanakya.in?igsh=ZTBiN2c2cXNlM2w=" className="text-gray-400 hover:text-orange-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Services</h3>
            <ul className="space-y-2">

              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Election Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Event Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Paid Promotion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">PR Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
    <h3 className="font-semibold text-sm uppercase text-white mb-4">Contact Us</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="https://www.google.com/maps?q=Guwahati,Assam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          <MapPin size={16} /> Address: Guwahati, Assam
        </a>
      </li>
      <li>
        <a
          href="mailto:hello@urbanchanakya.in"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          <Mail size={16} /> Email: hello@urbanchanakya.in
        </a>
      </li>
      <li>
        <a
          href="tel:03613584834"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          <Phone size={16} /> Phone No: 036135 84834
        </a>
      </li>
    </ul>
  </div>


          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Acceptable Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
       </>
  );
};

export default Footer;