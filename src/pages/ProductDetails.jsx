import Banner from "../components/Banner";
import Breadcrumb from "../components/BreadCrumb";
import location from "../assets/location.svg";
import { useState } from "react";
import { details, sections } from "../util/constant";
import { MdArrowRightAlt } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import { images } from "../util/constant";
import TrustpilotReviews from "../components/TrustpilotReviews";
import Card from "../components/Card";
import honda6 from "../assets/honda6.jpg";
import dog from "../assets/dog.png";
import check from "../assets/check.svg";
import trust from "../assets/trust.svg";
import blueHeart from "../assets/blueHeart.svg";
import mainCar from "../assets/mainCar.png";
import section from "../assets/section.png";
import mobileBG1 from "../assets/mobileBG1.png";
import mobileBG2 from "../assets/mobileBG2.png";
import { HiOutlineShare } from "react-icons/hi";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const thumbnailsPerPage = 6;
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  function handleThumbPrev() {
    if (thumbnailStartIndex > 0) {
      setThumbnailStartIndex(thumbnailStartIndex - thumbnailsPerPage);
    }
  }

  function handleThumbNext() {
    if (thumbnailStartIndex + thumbnailsPerPage < images.length) {
      setThumbnailStartIndex(thumbnailStartIndex + thumbnailsPerPage);
    }
  }

  function handleMobilePrev() {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleMobileNext() {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="">
      <Banner />
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4 max-w-screen-xl mx-auto px-4">
        <div className="md:col-span-3">
          <div className="mb-4 relative">
            <div className="relative">
              <img
                src={images[selectedIndex] || honda6}
                alt="Selected"
                className="w-full h-[260px] md:h-[440px] object-cover rounded-md"
              />

              <button className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-2 rounded-md cursor-pointer flex items-center gap-1">
                <HiOutlineShare className="w-5 h-5 text-gray-800" />
                <span className="text-sm text-gray-800">Share</span>
              </button>
            </div>

            <button
              onClick={handleMobilePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 bg-white rounded-full shadow md:hidden cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleMobileNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 bg-white rounded-full shadow md:hidden cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="relative w-full hidden md:block">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 bg-white rounded-full shadow cursor-pointer"
              onClick={handleThumbPrev}
            >
              <FaChevronLeft />
            </button>

            <div className="grid grid-cols-6 gap-2 w-full">
              {images
                .slice(
                  thumbnailStartIndex,
                  thumbnailStartIndex + thumbnailsPerPage
                )
                .map((img, index) => {
                  const realIndex = thumbnailStartIndex + index;
                  return (
                    <img
                      key={realIndex}
                      src={img}
                      alt={`Thumbnail ${realIndex}`}
                      onClick={() => {
                        setSelectedIndex(realIndex);
                        setSelectedImage(img);
                      }}
                      className={`w-full h-24 object-cover rounded cursor-pointer border ${
                        selectedIndex === realIndex
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    />
                  );
                })}
            </div>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 bg-white rounded-full shadow cursor-pointer"
              onClick={handleThumbNext}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="my-6 hidden md:block">
            <p>
              Our Reference:
              <span className="font-semibold">1950205924</span>
            </p>
            <div className="p-2 bg-cyan-50 rounded-sm inline-flex flex-row items-center gap-2 my-4">
              <img src={trust} alt="trust" />
              <span className="text-sm">Warrantywise protection available</span>
              <IoIosArrowRoundForward size={20} />
            </div>
            <h5 className="text-cyan-700 font-semibold">
              Autohaven Motors Limited
            </h5>
            <div className="flex flex-row items-center gap-1">
              <img src={location} />
              <span className="text-sm">High Wycombe</span>
            </div>
            <p className="italic font-thin text-gray-800 mt-2 text-sm">
              “Autohaven Motors Limited are delighted to be offering a lovely
              2016 (16 Plate) Honda Civic 2.0 i-VTEC Type R GT Euro 6 (s/s) 5dr.
              This is a 1 OWNER CAR FROM NEW and covered only 18,000 miles with
              FULL HONDA SERVICE HISTORY. MOT till March 2026. FINANCE
              AVAILABLE. In stunning Metallic Black with Red Type R Seats.
              Fantastic Spec Includes; 19'' Alloys, PRIVACY GLASS, Cruise
              Control, Front and rear parking”
            </p>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div>
            <span className="text-gray-600 text-sm">
              R GT Euro 6 (s/s) 5dr 2.0 i-VTEC Type
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Honda Civic
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 py-4">
            <span className="px-3 py-1 bg-blue-50 font-semibold rounded-sm text-xs">
              5,685 Miles
            </span>
            <span className="px-3 py-1 bg-blue-50 font-semibold rounded-sm text-xs">
              2013 (12 reg)
            </span>
            <span className="px-3 py-1 bg-green-50 font-semibold rounded-sm text-xs">
              Zero Deposit
            </span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">£10,990</h3>
              <div className="flex flex-row items-center gap-1">
                <img src={location} />
                <span className="text-sm">High Wycombe</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <h4 className="text-gray-700 font-semibold underline cursor-pointer">
                  £230 per month
                </h4>
                <MdArrowRightAlt size={20} />
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="text-sm text-gray-800 underline font-thin cursor-pointer">
                  Representative Example
                </span>
                <IoIosInformationCircle size={18} />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-blue-50 rounded-md">
            <span className="font-semibold">Get a quick finance quote</span>

            <div className="flex flex-col md:flex-row items-center gap-2 mt-3 w-full">
              <button className="bg-cyan-400 px-4 py-2 font-semibold rounded-sm w-full md:flex-1 hover:bg-cyan-300">
                Enquire Now
              </button>

              <img src={blueHeart} className="hidden md:block h-6 w-6" />
            </div>

            <div className="flex flex-row items-center gap-2 mt-3">
              <img src={check} />
              <span className="text-sm">Credit score protected</span>
            </div>
          </div>
          <div className="w-full md:w-5/6 hidden md:block">
            <div className="flex justify-end mb-2">
              <img src={dog} />
            </div>

            <div className="flex flex-col p-4 bg-blue-50 rounded-md">
              <span className="mt-1 font-semibold">Can We Help?</span>
              <textarea
                placeholder="Hi, I'm interested in this Honda Civic. Is it still available?"
                className="border border-gray-700 rounded px-3 py-2 h-20 my-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-400 px-4 py-2 font-semibold rounded-sm hover:bg-green-300">
                Send Message
              </button>
              <div className="flex flex-row items-center gap-2 my-3 justify-center">
                <img src={check} />
                <span className="text-sm">
                  Our car buyers are available 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-screen-xl mx-auto gap-8 md:gap-12 mt-12 md:mt-20 px-4">
        <div className="flex flex-col justify-center space-y-3">
          <span className="text-cyan-700 font-semibold text-center">
            R GT Euro 6 (s/s) 5dr 2.0 i-VTEC Type
          </span>
          <h4 className="text-2xl font-semibold text-gray-900 text-center">
            Honda Civic
          </h4>

          <div className="bg-blue-50 rounded-md p-4">
            <span className="font-semibold">Key Details</span>
            <div className="flex flex-col space-y-3 my-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img src={check} />
                  <span className="font-semibold">MOT</span>
                </div>
                <span className="text-gray-800 text-sm md:text-base">
                  Until November 24, 2025
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img src={check} />
                  <span className="font-semibold">Taxed</span>
                </div>
                <span className="text-gray-800 text-sm md:text-base">
                  Until May 1st 2025
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img src={check} />
                  <span className="font-semibold">Previous Keeper(s)</span>
                </div>
                <span className="text-gray-800 text-sm md:text-base">
                  Since May 4th 2025
                </span>
              </div>
            </div>

            <button className="bg-amber-300 w-full border border-black rounded-md font-semibold text-2xl py-1 px-6">
              SM72DZY
            </button>
          </div>

          <div className="w-full my-2">
            <span className="font-semibold">Car Finance Calculator:</span>
            <div className="flex flex-col sm:flex-row gap-2 my-2">
              <input
                type="number"
                className="border border-gray-900 rounded-md px-2 py-2 flex-grow text-center"
                placeholder="£250"
              />
              <button className="bg-amber-300 border border-black rounded-md font-semibold py-2 px-4 whitespace-nowrap">
                Enquire Now
              </button>
            </div>
            <div className="flex items-center gap-2 my-2">
              <img src={check} />
              <span className="text-gray-800">Credit score protected</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-cyan-700 font-semibold">Vehicle Overview</span>
          <div className="overflow-hidden mt-4">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 px-4 border-t border-gray-300"
              >
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-cyan-700 font-semibold">
            Vehicle Specifications & Features
          </span>
          <div className="overflow-hidden mt-4">
            {sections.map((section, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleSection(section.title)}
                  className="flex justify-between items-center py-3 px-4 border-t border-gray-300 cursor-pointer"
                >
                  <span className="font-medium text-gray-700">
                    {section.title}
                  </span>
                  {openSection === section.title ? (
                    <IoIosArrowRoundDown size={20} />
                  ) : (
                    <IoIosArrowRoundForward />
                  )}
                </div>

                {openSection === section.title && (
                  <div className="px-4 py-2 border-t border-gray-300 text-sm text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-5/6 mx-auto block md:hidden">
          <div className="flex justify-center mb-2">
            <img src={dog} />
          </div>

          <div className="flex flex-col p-4 bg-blue-50 rounded-md">
            <span className="mt-1 font-semibold">Can We Help?</span>
            <textarea
              placeholder="Hi, I'm interested in this Honda Civic. Is it still available?"
              className="border border-gray-700 rounded px-3 py-2 h-20 my-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-400 px-4 py-2 font-semibold rounded-sm hover:bg-green-300">
              Send Message
            </button>
            <div className="flex flex-row items-center gap-2 my-3 justify-center">
              <img src={check} />
              <span className="text-sm">Our car buyers are available 24/7</span>
            </div>
          </div>
        </div>
        <div className="my-6 block md:hidden">
          <p>
            Our Reference:
            <span className="font-semibold">1950205924</span>
          </p>
          <div className="p-2 bg-cyan-50 rounded-sm inline-flex flex-row items-center gap-2 my-4">
            <img src={trust} alt="trust" />
            <span className="text-sm">Warrantywise protection available</span>
            <IoIosArrowRoundForward size={20} />
          </div>
          <h5 className="text-cyan-700 font-semibold">
            Autohaven Motors Limited
          </h5>
          <div className="flex flex-row items-center gap-1">
            <img src={location} />
            <span className="text-sm">High Wycombe</span>
          </div>
          <p className="italic font-thin text-gray-800 mt-2 text-sm">
            “Autohaven Motors Limited are delighted to be offering a lovely 2016
            (16 Plate) Honda Civic 2.0 i-VTEC Type R GT Euro 6 (s/s) 5dr. This
            is a 1 OWNER CAR FROM NEW and covered only 18,000 miles with FULL
            HONDA SERVICE HISTORY. MOT till March 2026. FINANCE AVAILABLE. In
            stunning Metallic Black with Red Type R Seats. Fantastic Spec
            Includes; 19'' Alloys, PRIVACY GLASS, Cruise Control, Front and rear
            parking”
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 my-20 max-w-screen-xl mx-auto px-4 mt-6">
        <img
          src={mainCar}
          alt="mainCar"
          className="rounded-md w-full lg:w-2/3 h-auto object-cover"
        />
        <div className="lg:-mt-14">
          <span className="font-semibold text-lg">AI-overview</span>
          <div className="bg-blue-50 p-4 rounded-md mt-2">
            <span className="font-semibold block">
              Honda Civic Type R GT 2018 2.0 i-VTEC
            </span>
            <div className="flex items-start gap-2 mt-2">
              <img src={check} className="w-5 h-5 object-contain" />
              <p className="text-gray-800 text-sm">
                The 2018 Honda Civic Type R GT is the fastest front-wheel-drive
                production car to ever lap the Nürburgring at its release,
                clocking in at 7 minutes 43.8 seconds. It’s a road-legal rocket
                with track-honed engineering and everyday usability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <TrustpilotReviews />
      </div>
      <div className="relative">
        <img
          src={section}
          className="hidden md:block w-full"
          alt="Desktop Section"
        />

        <div className="block sm:block md:hidden">
          <img src={mobileBG1} className="w-full" alt="Mobile BG 1" />
          <img src={mobileBG2} className="w-full" alt="Mobile BG 2" />
        </div>
      </div>

      <div className="bg-blue-100">
        <h4 className="text-slate-800 text-xl font-semibold text-center pt-10">
          Similar Cars On Finance
        </h4>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center pb-10">
          <button className="bg-gray-200 px-6 py-2 rounded-full cursor-pointer">
            More Cars
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
