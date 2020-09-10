import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";

class MainCarousel extends React.Component {
  render() {
    var settings = {
      dots:true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="slide">
          <img className="slide-img" src="./images/oil.jpg" alt="oil"/>
        </div>
        <div className="slide">
          <img className="slide-img" src="./images/timebelt.jpg" alt="dist" />
        </div>
        <div className="slide">
          <img className="slide-img" src="./images/lights.jpg" alt="lights" />
        </div>
  
      </Slider>
    );
  }
}

export default MainCarousel;