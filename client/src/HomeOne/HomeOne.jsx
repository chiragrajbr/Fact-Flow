import React from "react";
import Slider from "react-slick";
const images = [
  "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/2/h/0/medium-beautifull-nature-wall-picture-photographic-paper-14x20-original-imag6jtayz9vphgx.jpeg?q=90"
];

const HomeOne = () => {
  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h1> <center>Fact Flow</center></h1>
      <Slider {...imageSettings}>
        {images.map((image, index) => {
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>;
        })}
      </Slider>

      {}
    </div>
  );
};

export default HomeOne;
