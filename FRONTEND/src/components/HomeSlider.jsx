import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import assets from "../assets/assets";

const HomeSlider = () => {
  return (
    <div className="w-full bg-gray-100">
      <Swiper
        navigation={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Autoplay]}
        className="mySwiper py-4!"
      >
        <SwiperSlide className="w-full! h-120!">
          <img
            className="w-full h-full object-cover"
            src={assets.banner01}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-120!">
          <img
            className="w-full h-full object-cover"
            src={assets.banner01}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-120!">
          <img
            className="w-full h-full object-cover"
            src={assets.banner01}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-120!">
          <img
            className="w-full h-full object-cover"
            src={assets.banner01}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-120!">
          <img
            className="w-full h-full object-cover"
            src={assets.banner01}
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      {/* Category */}
      <div className="px-10">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-4!"
        >
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg cursor-pointer">
            <img
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg text-center space-y-2 bg-white p-4 shadow-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={assets.product01}
              alt=""
            />
            <h4 className="text-gray-800 font-medium">Category 01</h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
