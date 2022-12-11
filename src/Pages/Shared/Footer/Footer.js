import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-400 text-white ">
        <div>
          <img src="" alt="" />
          <p>
            <span className="text-4xl font-bold font-serif">
              Nurul Alam Akib
            </span>
            <br />
            Address: Khilkhet, Dhaka-1229 <br /> Email: jack245200@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/akibusp964/">
              <FaFacebook className="text-3xl text-blue-600"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/akib-alam/">
              <FaLinkedin className="text-3xl text-sky-500"></FaLinkedin>
            </a>
            <a href="https://github.com/nurulalam245200">
              <FaGithub className="text-3xl"></FaGithub>
            </a>
          </div>
        </div>
      </footer>
      <p className="text-slate-500 text-center">
        2022 | © copyright by | Nurul Alam Akib |
      </p>
    </div>
  );
};

export default Footer;
