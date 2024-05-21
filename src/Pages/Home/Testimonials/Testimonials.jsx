import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quote from '/quote-left.svg'
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-8 lg:mb-16"> 
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      />
      <img src={quote} alt="" className="mx-auto mb-4 md:mb-8"/>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-[300px] md:w-[600px] lg:w-[800px] text-center mx-auto space-y-2">
              <Rating className="mx-auto" style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-justify md:text-center">{review.details}</p>
              <h3 className="text-xl md:text-3xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
