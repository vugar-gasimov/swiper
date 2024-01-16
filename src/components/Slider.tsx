import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import SpaceCity1 from "../assets/SpaceCity1.jpg";
import SpaceCity2 from "../assets/SpaceCity2.jpeg";
import SpaceCity3 from "../assets/SpaceCity3.jpeg";
import SpaceCity4 from "../assets/SpaceCity4.jpeg";
import SpaceCity5 from "../assets/SpaceCity5.jpeg";

const Slider = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
      <h2>BlaBla</h2>
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
        <SwiperSlide>
          <img
            className="w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity1}
            alt="blabla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity2}
            alt="blabla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity3}
            alt="blabla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity4}
            alt="blabla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity5}
            alt="blabla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[250px] h-[340px] mx-auto relative"
            src={SpaceCity1}
            alt="blabla"
          />
        </SwiperSlide>
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
