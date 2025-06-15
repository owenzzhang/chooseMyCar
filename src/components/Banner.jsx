import CoinsIcon from "../assets/CoinsIcon.svg";
import PeopleIcon from "../assets/PeopleIcon.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import Trustpilot from "../assets/Trustpilot.svg";
import SaleTagIcon from "../assets/SaleTagIcon.svg";

function Banner() {
  return (
    <div className="bg-blue-200 py-2 px-8">
      <div className="bg-blue-200 max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between">
        {/* Coins */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <img src={CoinsIcon} alt="Coins Icon" className="w-8 h-8" />
          <p className="text-gray-600 font-medium text-sm">
            <span className="text-black">Zero</span> Deposits
          </p>
        </div>

        {/* SaleTag */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <img src={SaleTagIcon} alt="Sale Tag Icon" className="w-6 h-6" />
          <p className="text-gray-600 font-medium text-sm">
            <span className="text-black">Affordable</span> Finance Deals
          </p>
        </div>

        {/* Trustpilot */}
        <div className="flex items-center justify-center gap-4 my-2">
          <img src={Trustpilot} alt="Trustpilot Icon" className="w-12 h-12" />
          <p className="text-gray-600 font-medium text-sm">
            <span className="text-black">4.9 out of 5 </span>on Trustpilot
          </p>
        </div>

        {/* People */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <img src={PeopleIcon} alt="People Icon" className="w-8 h-8" />
          <p className="text-gray-600 font-medium text-sm">
            <span className="text-black">Reputable</span> Dealerships
          </p>
        </div>

        {/* Home */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <img src={HomeIcon} alt="Home Icon" className="w-6 h-6" />
          <p className="text-gray-600 font-medium text-sm">
            <span className="text-black">Home Delivery</span> Available
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
