import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { ServiceData } from "../constants";
import { useState } from "react";

const Slider = () => {
  const [showFullContent, setShowFullContent] = useState<
    Record<number, boolean>
  >({});
  const [showSvg, setShowSvg] = useState<Record<number, boolean>>({});

  const toggleContent = (index: number) => {
    setShowFullContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const toggleSvg = (index: number, isHovering: boolean) => {
    setShowSvg((prev) => ({
      ...prev,
      [index]: isHovering,
    }));
  };

  return (
    <div className=" mx-auto px-4 md:px-8 pt-16 bg-[#7A8868]">
      <h2 className="text-white font-bold text-[24px]">Популярне</h2>
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
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-52rem pb-8  relative"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="w-[64px] h-[64px] z-10 ">
              {showSvg[index] && (
                <img
                  className=""
                  src={item.icon}
                  alt="Ukrainian Armed Forces emblems"
                />
              )}
            </div>

            <div
              className="flex flex-col justify-center  items-center gap-3 group relative shadow-lg  text-black rounded-xl p-5 max-h-[354px] w-[254px]  overflow-hidden cursor-pointer  bg-[#fff]  "
              onMouseEnter={() => toggleSvg(index, true)}
              onMouseLeave={() => toggleSvg(index, false)}
            >
              {!showFullContent[index] && (
                <>
                  <div
                    className=" inset-0 bg-contain bg-no-repeat bg-center h-[200px] w-[134px]"
                    style={{
                      backgroundImage: `url(${item.backgroundImage})`,
                    }}
                  />

                  <div className=" absolute inset-0 bg-black opacity-10 " />
                  <div className=" relative flex flex-col gap-3">
                    <p className="text-xl lg:text-2xl">{item.title}</p>
                    <button
                      onClick={() => toggleContent(index)}
                      className="flex items-center justify-center gap-8 h-10 p-6 border border-solid border-primary bg-primary rounded-md text-primaryText"
                    >
                      Чиати більше
                    </button>
                  </div>
                </>
              )}
              {showFullContent[index] && (
                <div className="flex flex-col  justify-start  items-center gap-3 h-screen  overflow-y-auto   mr-[-10px] pb-[50px]">
                  <p className=" lg:text-[18px]">{item.content}</p>
                  <button
                    onClick={() => toggleContent(index)}
                    className="flex items-center justify-center gap-8 h-10 p-6 border border-solid border-primary bg-primary rounded-md text-primaryText absolute bottom-[20px] right-[20px] min-w-[215px]"
                  >
                    Читати менше
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className=" hidden md:block swiper-button-prev  left-20 -translate-x-20 lg:left-30 lg:-translate-x-30"></div>
          <div className="hidden md:block swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
