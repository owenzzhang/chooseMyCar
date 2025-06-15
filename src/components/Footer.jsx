import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { locations, manufacturers, bodyStyles } from "../util/constant";
import { MdPhone, MdEmail } from "react-icons/md";
import { useState } from "react";
import twitterFill from "../assets/twitterFill.svg";
import Instagram from "../assets/Instagram.svg";
import facebook from "../assets/facebook.svg";

function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [showAllManufacturers, setShowAllManufacturers] = useState(false);

  const visibleLocations = locations.slice(0, 10);
  const hiddenLocations = locations.slice(10);
  const visibleManufactures = manufacturers.slice(0, 10);
  const hiddenManufactures = manufacturers.slice(10);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-slate-700">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="hidden md:grid grid-cols-6 gap-8 py-8 text-gray-100 text-xs">
          <div>
            <h4 className="font-semibold mb-4 text-lg">Manufacturers</h4>
            <ul className="space-y-2 text-xs text-gray-100">
              {visibleManufactures.map((man) => (
                <li>{man}</li>
              ))}
              {showAllManufacturers ? (
                hiddenManufactures.map((man) => <li>{man}</li>)
              ) : (
                <li>
                  <button
                    onClick={() => setShowAllManufacturers(true)}
                    className="text-blue-300 cursor-pointer hover:underline flex flex-row items-center gap-1"
                  >
                    <MdOutlineKeyboardArrowDown /> See all manufacturers
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-2">
              <li>London</li>
              <li>Birmingham</li>
              <li>Bristol</li>
              <li>Glasgow</li>
              <li>Liverpool</li>
              <li>Manchester</li>
              <li>Middlesbrough</li>
              <li>Newcastle</li>
              <li>Durham & Newton Aycliffe</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Locations</h4>
            <ul className="space-y-2 text-xs text-gray-100">
              {visibleLocations.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
              {!showAllLocations ? (
                <li>
                  <button
                    onClick={() => setShowAllLocations(true)}
                    className="text-blue-300 cursor-pointer hover:underline flex flex-row items-center gap-1"
                  >
                    <MdOutlineKeyboardArrowDown /> See all locations
                  </button>
                </li>
              ) : (
                hiddenLocations.map((loc) => <li key={loc}>{loc}</li>)
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Body Styles</h4>
            <ul className="space-y-2">
              {bodyStyles.map((style) => (
                <li key={style}>{style}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li>Articles</li>
              <li>News</li>
              <li>Car Finance Explained</li>
              <li>Bad Credit Car Finance</li>
              <li>No Deposit Car Finance</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Complaints Procedure</li>
              <li>Trademark</li>
              <li>Initial Disclosure Document</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <MdPhone size={24} /> 0161 768 1543
              </li>
              <li>
                <a
                  href="mailto:hello@choosemycar.com"
                  className="flex items-center gap-3"
                >
                  <MdEmail size={24} /> hello@choosemycar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden py-6 text-gray-100 text-xs">
          {[
            {
              title: "Manufacturers",
              items: manufacturers,
              key: "manufacturers",
            },
            {
              title: "Contact Us",
              items: [
                "London",
                "Birmingham",
                "Bristol",
                "Glasgow",
                "Liverpool",
                "Manchester",
                "Middlesbrough",
                "Newcastle",
                "Durham & Newton Aycliffe",
              ],
              key: "contact",
            },
            {
              title: "Locations",
              items: locations,
              key: "locations",
            },
            {
              title: "Body Styles",
              items: bodyStyles,
              key: "bodyStyles",
            },
            {
              title: "Resources",
              items: [
                "Articles",
                "News",
                "Car Finance Explained",
                "Bad Credit Car Finance",
                "No Deposit Car Finance",
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
                "Complaints Procedure",
                "Trademark",
                "Initial Disclosure Document",
              ],
              key: "resources",
            },
            {
              title: "Get in Touch",
              items: [
                { type: "phone", label: "0161 768 1543" },
                {
                  type: "email",
                  label: "hello@choosemycar.com",
                  href: "mailto:hello@choosemycar.com",
                },
              ],
              key: "getintouch",
            },
          ].map(({ title, items, key }) => (
            <div key={key} className="mb-4 border-b border-gray-600 pb-2">
              <button
                className="w-full flex justify-between items-center font-semibold text-lg mb-3"
                onClick={() => toggleSection(key)}
                aria-expanded={openSection === key}
              >
                {title}
                <MdOutlineKeyboardArrowDown
                  className={`transform transition-transform duration-300 ${
                    openSection === key ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                />
              </button>
              {openSection === key && (
                <ul className="mt-2 space-y-2 pl-2">
                  {items.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={i}>{item}</li>
                    ) : item.type === "phone" ? (
                      <li key={i} className="flex items-center gap-3">
                        <MdPhone size={20} /> {item.label}
                      </li>
                    ) : item.type === "email" ? (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="flex items-center gap-3 underline"
                        >
                          <MdEmail size={20} /> {item.label}
                        </a>
                      </li>
                    ) : null
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center lg:justify-end md:justify-end justify-center gap-3 lg:border-t lg:border-b border-gray-100 py-2">
          <img src={twitterFill} alt="Twitter" />
          <img src={facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
        </div>

        <div className="w-full text-center space-y-4 text-sm py-4">
          <p className="text-gray-100 text-xs">
            Caerus Capital Limited trading as <strong>ChooseMyCar</strong> is
            authorised and regulated by the Financial Conduct Authority with
            firm reference number <strong>802631</strong>. You can check our
            authorisation on the FCA Financial Services Register by visiting:{" "}
            <a
              href="https://register.fca.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://register.fca.org.uk
            </a>
            .
          </p>

          <p className="text-gray-100 text-xs">
            Registered address: Alexandra Court, Carrs Rd, Cheadle SK8 2JY
            (Company Number: <strong>10933221</strong>) Registered with the
            Information Commissioner’s Office: <strong>ZA510674</strong>.
          </p>

          <p className="text-gray-100 text-xs">
            <strong>ChooseMyCar</strong> is a credit broker and not a lender.
            The lenders we work with could pay commission at different rates,
            but this will not affect the rate that you pay. We will advise you
            of the amount of commission payable to us and gain your consent
            before proceeding. All finance is subject to status. Terms and
            conditions apply. Applicants must be 18 years or over.
          </p>

          <p className="text-gray-100 text-xs">
            <strong>
              Rates from <span data-statements-hp-apr-from="">9.9%</span> APR:
            </strong>{" "}
            the exact rate you will be offered will be based on your
            circumstances, subject to status. <br />
            <strong>Representative example:</strong> borrowing{" "}
            <strong>£9,000</strong> over <strong>60 months</strong> with a
            representative APR of{" "}
            <strong data-statements-hp-apr-representative="">21.9%</strong>, an
            annual interest rate of{" "}
            <strong data-statements-hp-apr-representative="">21.9%</strong>{" "}
            (Fixed) and a deposit of £0.00, the amount payable would be{" "}
            <strong>£238.28</strong> per month, with a total cost of credit of{" "}
            <strong>£5,296.90</strong> and a total amount payable of{" "}
            <strong>£14,296.90</strong>. Our car buying specialist will look to
            find you the <strong>best rate from our panel of lenders</strong>{" "}
            and will offer you the best deal you’re eligible for. <br /> We
            don’t charge a fee for our service, but we do earn a commission. The
            commission we earn does not influence the interest rate you’re
            offered in any way.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
