import React from "react";
import { PawPrint, Facebook, Instagram, Twitter } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  return (
     <footer className="bg-linear-to-r from-amber-200 via-amber-300 to-amber-400
            dark:bg-linear-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

        {/* Column 1: Logo & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <PawPrint className="w-8 h-8 text-orange-700 dark:text-gray-100" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">PawMart</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-sm">
            <Typewriter
                    words={[
                        "PawMart connects local pet owners and buyers for adoption and pet care products.We believe every pet deserves love, care, and a happy home. 🐶🐱"
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={2000}



                  />

          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div className="md:text-center">
          <h3 className="font-semibold text-lg text-orange-800 dark:text-gray-100 mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-orange-700 dark:hover:text-gray-200 transition">Home</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-700 transition">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-700 transition">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="md:text-right">
          <h3 className="font-semibold text-lg text-orange-800 mb-3 dark:text-gray-100">Follow Us</h3>
          <div className="flex md:justify-end gap-4">
            <a href="#" className="hover:text-orange-800 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-800 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-800 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t border-amber-300 dark:border-gray-300 my-4"></div> */}

      {/* Copyright */}
      <div className="text-center text-sm text-gray-700 dark:text-gray-100 mt-5">
        © {new Date().getFullYear()} <span className="font-semibold text-orange-800 dark:text-gray-100">PawMart</span>.
        All rights reserved. Made with ❤️ for pets.
      </div>
    </footer>


  );
};

export default Footer;
