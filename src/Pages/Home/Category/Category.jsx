import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle heading="ORDER ONLINE" subHeading="---From 11:00am to 10:00pm---">

      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  mb-6"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-xs md:text-xl lg:text-3xl uppercase -mt-4 md:-mt-16 font-bold text-white text-center ">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-xs md:text-xl lg:text-3xl uppercase -mt-4 md:-mt-16 font-bold text-white text-center ">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-xs md:text-xl lg:text-3xl uppercase -mt-4 md:-mt-16 font-bold text-white text-center ">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-xs md:text-xl lg:text-3xl uppercase -mt-4 md:-mt-16 font-bold text-white text-center ">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-xs md:text-xl lg:text-3xl uppercase -mt-4 md:-mt-16 font-bold text-white text-center ">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
