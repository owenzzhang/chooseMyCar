import smallCar from "../assets/smallCar.jpg";
import location from "../assets/location.svg";
import { MdArrowRightAlt, MdCameraAlt } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

function Card() {
  return (
    <div className="bg-blue-100 max-w-sm rounded-lg overflow-hidden">
      <div className="bg-white shadow-md flex flex-col">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={smallCar}
            alt="Car"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></span>
            <span className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></span>
            <span className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></span>
            <span className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></span>
          </div>

          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white flex items-center gap-1 px-2 py-1 rounded">
            <MdCameraAlt size={16} />
            <span className="text-xs font-medium">29</span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <span className="text-sm text-gray-500 mb-1">
            R GT Euro 6 (s/s) 5dr 2.0 i-VTEC Type
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Honda Civic
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-800 font-medium rounded text-xs">
              5,685 Miles
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-800 font-medium rounded text-xs">
              2013 (12 reg)
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-800 font-medium rounded text-xs">
              Zero Deposit
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white rounded-b-lg p-4 mt-0.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">£10,990</h3>
          <div className="flex items-center gap-1">
            <h4 className="text-gray-700 font-medium underline cursor-pointer">
              £230 / month
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={location} alt="Location" className="w-4 h-4" />
            <span className="text-sm text-gray-600">High Wycombe</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-sm text-gray-500 underline">
              Representative Example
            </span>
            <IoIosInformationCircle size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
