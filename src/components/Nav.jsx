import { useState } from "react";
import cmcLogo from "../assets/cmcLogo.svg";
import heartBlue from "../assets/heartBlue.svg";
import account from "../assets/account.svg";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-6">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <a href="/" className="flex items-center">
          <img src={cmcLogo} className="h-8 md:h-12" alt="Choose my car Logo" />
        </a>

        <div className="flex items-center space-x-4 md:hidden">
          <a href="#">
            <img src={account} alt="Account" className="h-6 w-6" />
          </a>
          <a href="#" className="relative">
            <img src={heartBlue} alt="Favourites" className="h-6 w-6" />
            <span className="absolute -top-1 -right-2 text-[10px] bg-cyan-700 text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://choosemycar.com/car-finance"
            className="text-gray-900 hover:text-blue-700"
          >
            Car Finance
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Find a Car
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Services
          </a>

          <div className="border-l border-gray-300 h-6"></div>

          <a href="#">
            <img src={account} alt="Account" className="h-6 w-6" />
          </a>
          <a href="#" className="relative">
            <img src={heartBlue} alt="Favourites" className="h-6 w-6" />
            <span className="absolute -top-1 -right-2 text-[10px] bg-cyan-700 text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <a
            href="https://choosemycar.com/car-finance"
            className="block text-gray-900 hover:text-blue-700"
          >
            Car Finance
          </a>
          <a href="#" className="block text-gray-900 hover:text-blue-700">
            Find a Car
          </a>
          <a href="#" className="block text-gray-900 hover:text-blue-700">
            Services
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
