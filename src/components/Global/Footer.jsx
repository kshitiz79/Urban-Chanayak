import React from 'react';
import { MapPin, Mail, Phone } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white z-50">
      <div className="w-full bg-gradient-to-b from-gray-950 to-black md:py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 max-w-full mx-auto text-center md:text-left">
          
          {/* Logo and Socials */}
          <div className="flex flex-col items-center md:items-start 2xl:items-start">
            <img
              src="/logo1.png"
              alt="Urban Chanakya Logo"
              className="md:w-40 2xl:w-70 mb-4 2xl:-mt-20"
            />
            <div className="flex justify-center md:justify-start space-x-6 -mt-10 ">
              <a href="https://x.com/ChanakyaUrban" className="text-gray-400 hover:text-orange-500">
                <FaXTwitter size={20} className="2xl:size-12" />
              </a>
              <a href="https://www.linkedin.com/company/urbanchanakya" className="text-gray-400 hover:text-orange-500">
                <FaLinkedin size={20} className="2xl:size-12" />
              </a>
              <a href="https://www.facebook.com/chanakyaurban" className="text-gray-400 hover:text-orange-500">
                <FaFacebook size={20} className="2xl:size-12" />
              </a>
              <a href="https://www.instagram.com/urbanchanakya.in" className="text-gray-400 hover:text-orange-500">
                <FaInstagram size={20} className="2xl:size-12" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white text-md">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Blogs</a></li>
              <li><a href="/contact-us" className="text-gray-400 hover:text-white text-md">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Election Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Event Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Paid Promotion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">PR Management</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.google.com/maps?q=Guwahati,Assam" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-md">
                  <MapPin size={16} /> Guwahati, Assam
                </a>
              </li>
              <li>
                <a href="mailto:hello@urbanchanakya.in" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-md">
                  <Mail size={16} /> hello@urbanchanakya.in
                </a>
              </li>
              <li>
                <a href="tel:03613584834" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-md">
                  <Phone size={16} /> 036135 84834
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Acceptable Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-md">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
