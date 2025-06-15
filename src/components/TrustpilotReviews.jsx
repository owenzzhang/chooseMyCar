import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TrustpilotLogo from "./TrustpilotLogo";
import { reviews } from "../util/constant";
import TrustpilotStars from "./TrustpilotStars";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import star5 from "../assets/stars5.svg";

function TrustpilotReviews() {
  return (
    <section className="py-12 my-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center lg:flex-row md:flex-row flex-col gap-3 pb-4">
            <h2 className="lg:text-2xl md:text-xl text-lg text-black">
              We’re rated <span className="text-green-700">Excellent</span> on
            </h2>
            <TrustpilotLogo />
            <img src={star5} className="w-26 h-auto" />
          </div>
          <span className="text-sm">
            4.9 out of 5 on <span className="font-semibold"> 3640 Reviews</span>
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-[-44px] z-20 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Previous"
        >
          <FiChevronLeft size={32} />
        </button>
        <button
          className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-[-44px] z-20 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Next"
        >
          <FiChevronRight size={32} />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 32 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="swiper-container"
          style={{ paddingBottom: "50px" }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-emerald-50 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-lg h-[280px] w-[280px] md:w-full mx-auto flex flex-col shadow-sm relative">
                {/* Top: stars and date */}
                <div className="flex flex-row items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrustpilotStars stars={review.stars} />
                  </div>
                  <span className="capitalize text-gray-500 text-sm">
                    {review.createdAt}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-center overflow-hidden">
                  <h4 className="lg:text-base md:text-base text-sm font-semibold text-gray-900 capitalize leading-6 pb-3">
                    {review.title}
                  </h4>
                  <p className="lg:text-sm md:text-sm text-sm text-gray-600 leading-7 line-clamp-4">
                    {review.text}
                  </p>
                </div>

                <div className="flex items-center gap-5 border-gray-200 pt-5 mt-5">
                  <h5 className="text-gray-900 font-semibold capitalize">
                    {review.consumer.displayName}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center pt-10">
            <button className="bg-gray-200 px-6 py-2 rounded-full cursor-pointer">
              More Reviews
            </button>
          </div>
        </Swiper>
      </div>

      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #d1d5db;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px;
          }
          .swiper-pagination-bullet-active {
            background-color: #ff0000;
          }

          /* Override swiper's default blue button styles */
          .swiper-button-prev,
          .swiper-button-next {
            color: #d1d5db !important; /* light gray */
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            color: #6b7280 !important; /* medium gray on hover */
          }
        `}
      </style>
    </section>
  );
}

export default TrustpilotReviews;
