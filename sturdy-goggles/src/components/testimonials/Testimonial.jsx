import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/me3.jpg";
// import AVTR2 from "../../assets/taura.jpg";
// import AVTR3 from "../../assets/avatar1.jpg";
// import AVTR4 from "../../assets/avatar1.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Wambui",
    review:
      "I had the pleasure of working with noel on a recent project and I was thoroughly impressed with her skills and dedication. She has a deep understanding of Software Engineering, and her technical knowledge allowed us to efficiently and effectively tackle any challenges that arose. noel is also a fantastic communicator and team player, always willing to lend a helping hand and collaborate with others. I highly recommend her for any engineering role and I am confident she will exceed expectations.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
