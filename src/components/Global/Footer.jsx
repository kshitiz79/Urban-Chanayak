import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // For social icons

const Footer = () => {
  return (

    <>

     {/* Brand Name */}
        {/* <div className="flex  justify-center  bg-black -mb-56 ">
    <h1 className="  text-[18rem]  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 tracking-tight">
 
  Resend
</h1>




        </div> */}
    
 
    <div className=" text-white py-16 min-h-[400px] flex bg-black z-50 items-center">
      <div className="  w-full">
       

        {/* Footer Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-gradient-to-b from-gray-950 to-black py-20  px-20 z-50 max-w-full mx-auto">

          {/* Contact Info */}
          <div className="col-span-1">
            <p className="text-gray-400 text-sm mb-4">
              2261 Market Street #5039
              <br />
              San Francisco, CA 94114
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Getting Started</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Examples</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">SDKs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Customers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Brand</a></li>
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