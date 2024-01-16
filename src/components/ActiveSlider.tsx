import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";
import { ServiceData } from "../constants";
const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#7A8868] gap-[16px] pl-[20px] py-[40px]">
      <h2 className="font-impact text-white text-2xl font-normal mr-auto">
        Popular
      </h2>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        modules={{ FreeMode, Pagination }}
        className="max-w-[90%] lg:max-w-[80%] h-[100%] "
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col justify-center  items-center gap-3 group relative shadow-lg text-white rounded-xl p-5 h-[340px] w-[254px]  overflow-hidden cursor-pointer  bg-[#4c5c36]">
              <div
                className="ablosute inset-0 bg-cover bg-center h-[200px] w-[134px]"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className=" absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className=" relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <p className="text-xl lg:text-2xl">{item.title}</p>
                <button className="flex items-center justify-center gap-8 h-10 p-6 border border-solid border-primary bg-primary rounded-md text-primaryText">
                  Read more
                </button>
                {/* <p className=" lg:text-[18px]">{item.content}</p> */}
              </div>
              <div className="swiper-pagination-dot"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
