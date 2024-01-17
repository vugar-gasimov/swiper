import { SwiperSlide } from "swiper/react";
import { ServiceData } from "../constants";

const Card = () => {
  return (
    <>
      {ServiceData.map((item) => (
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
          </div>
        </SwiperSlide>
      ))}
    </>
  );
};

export default Card;
