import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import cover from "../../.././assest/cover.svg";

const Slider = () => {
  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    resetProgress: false,
    arrows: true,
    pagination: true,
    height: "100%",
    width: "100%",
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        height: "100%",
        width: "100%",
        fixedWidth: "100%",
        fixedHeight: "100%",
        autoWidth: true,
        autoHeight: true,
      },
      768: {
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        height: "100%",
        width: "100%",
        fixedWidth: "100%",
        fixedHeight: "100%",
        autoWidth: true,
        autoHeight: true,
      },
      1024: {
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        height: "100%",
        width: "100%",
        fixedWidth: "100%",
        fixedHeight: "100%",
        autoWidth: true,
        autoHeight: true,
      },
    },
  };

  return (
    <Splide options={options} aria-label="My Favorite Images">
      {[1,2,3,4,5,6,7,8,9,10].map((item) => (
        <SplideSlide key={item}>
          <img
            src={cover}
            alt="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </SplideSlide>
      ))}
  
    </Splide>
  );
};

export default Slider;
