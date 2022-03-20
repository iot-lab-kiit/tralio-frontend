import React from "react";
import Slider from "react-slick";
import { TestimonialDetail } from "../../TralioAPI/Testimonial";
import Testimonial from "../Testimonial/Testimonial";
import Container from "@mui/material/Container";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      );
    }
  );

  return (
    <Container>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>{propsTestimonial}</Slider>
    </Container>
  );
}

export default Carousel;
