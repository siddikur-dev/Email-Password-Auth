import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} AuthApp. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-sm">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
