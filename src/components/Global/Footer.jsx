import React from 'react';
import { MapPin, Mail, Phone } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white z-50">
      <div className="w-full bg-gradient-to-b from-gray-950 to-black py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 max-w-full mx-auto text-center md:text-left">
          
          {/* Logo and Socials */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="./logo1.png"
              alt="Urban Chanakya Logo"
              className="w-40 mb-4"
            />
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://x.com/ChanakyaUrban" className="text-gray-400 hover:text-orange-500">
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/urbanchanakya" className="text-gray-400 hover:text-orange-500">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/chanakyaurban" className="text-gray-400 hover:text-orange-500">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/urbanchanakya.in" className="text-gray-400 hover:text-orange-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Election Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Event Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Paid Promotion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">PR Management</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.google.com/maps?q=Guwahati,Assam" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-sm">
                  <MapPin size={16} /> Guwahati, Assam
                </a>
              </li>
              <li>
                <a href="mailto:hello@urbanchanakya.in" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-sm">
                  <Mail size={16} /> hello@urbanchanakya.in
                </a>
              </li>
              <li>
                <a href="tel:03613584834" className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white text-sm">
                  <Phone size={16} /> 036135 84834
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Acceptable Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
