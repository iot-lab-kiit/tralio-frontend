import React from "react";
import Slider from "react-slick";
import { TestimonialDetail } from "../../TralioAPI/Testimonial"
import Testimonial from "../Testimonial/Testimonial";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

  const propsTestimonial = TestimonialDetail.map(
    ({ avtar, description, name, designation }, index) => {
      return (
        <div key={index + 1092973}>
          <Testimonial
            avtar={avtar}
            description={description}
            name={name}
            designation={designation}
          />
        </div>
    )
}

export default Carousel;