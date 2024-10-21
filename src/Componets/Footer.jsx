import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";


import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Footer() {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <footer className="py-12 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            
            <div className="flex space-x-4 text-rose-100">
              <SiGmail size={30} className=" cursor-pointer  hover:text-red-400" onClick={() => handleLinkClick("mailto:nishant01210@gmail.com")} />
              <FaLinkedinIn size={30} className=" cursor-pointer  hover:text-red-400" onClick={() => handleLinkClick("https://linkedin.com/in/nishaantk")}/>
              <FaFacebook size={30} className=" cursor-pointer  hover:text-red-400" onClick={() => handleLinkClick("https://www.facebook.com/nishant.nsit.in")}/>
              <FaInstagram size={30} className=" cursor-pointer  hover:text-red-400" onClick={() => handleLinkClick("https://www.instagram.com/mr.nishant.mishra")} />
              <VscGithub size={30} className=" cursor-pointer  hover:text-red-400" onClick={() => handleLinkClick("https://github.com/mr-nishaant")}/>

            </div>
            <div className="mt-8 border-t border-gray-700 pt-3 flex flex-col items-center">
            <p className='text-center text-blue-200'>
                 Made with{' '}
                <FaHeart className='inline text-red-500 mx-1' />by Nishant.
            </p>
            <p className='text-center text-blue-200'>
                © 2024 Nishant. All rights reserved.
            </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
