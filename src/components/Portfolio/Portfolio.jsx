import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NoteBookApp from "../../img/noteBookApp.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="porfolio-slider"
      >
        <SwiperSlide>
          <img src={NoteBookApp} alt="" className="port-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
