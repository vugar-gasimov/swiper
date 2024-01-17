import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { ServiceData } from "../constants";

// import SpaceCity1 from "../assets/SpaceCity1.jpg";
// import SpaceCity2 from "../assets/SpaceCity2.jpeg";
// import SpaceCity3 from "../assets/SpaceCity3.jpeg";
// import SpaceCity4 from "../assets/SpaceCity4.jpeg";
// import SpaceCity5 from "../assets/SpaceCity5.jpeg";

const Slider = () => {
  return (
    <div className=" mx-auto px-4 md:px-8 py-16 bg-[#7A8868]">
      <h2 className="text-white font-bold text-[24px]">Popular</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-52rem py-8 relative"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} className="flex justify-center">
            <div className="flex flex-col justify-center  items-center gap-3 group relative shadow-lg text-white rounded-xl p-5 h-[340px] w-[254px]  overflow-hidden cursor-pointer  bg-[#4c5c36]">
              <div
                className="ablosute inset-0 bg-contain bg-no-repeat bg-center h-[200px] w-[134px]"
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
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="swiper-button-prev  left-20 -translate-x-20 lg:left-30 lg:-translate-x-30">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
