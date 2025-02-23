import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigateTo = useNavigate();

  return (
    <footer className="text-[#4B5563] py-20 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={assets.logo}
            alt="logo"
            width={200}
            className="mx-auto md:mx-0"
          />
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-400">
            <li
              onClick={() => navigateTo("/")}
              className="hover:text-blue-500 hover:underline cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => navigateTo("/about")}
              className="hover:text-blue-500 hover:underline cursor-pointer"
            >
              About us
            </li>
            <li
              onClick={() => navigateTo("/contact")}
              className="hover:text-blue-500 hover:underline cursor-pointer"
            >
              Contact us
            </li>
            <li
              onClick={() => navigateTo("/")}
              className="hover:text-blue-500 hover:underline cursor-pointer"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +1-212-456-7890</li>
            <li>📧 greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
