import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";


class LogoSlider extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainlogoslider-Container">
       
        <Slider {...settings}>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZplm6J7Msfc2eGMjwpBBw2mn3WdcUF54ww&s" alt="logo1" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6VGT2dD3YwAr6kHHM9zIoEJEcfaX78O6jw&s" alt="logo2" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVX65s6JZp04vpGh8ggrpCMb5RVzM2fsS7Q&s" alt="logo3" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfFDn8i6RgirqPBKPqcPJ1LkWwsAUjQFu8w&s " alt="logo4" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXZtsXqLdTgf-A1xpeB82gvAlSFePV9iigg&s" alt="logo5" />
          </div>
          <div className="logoslider-container">
            <img src="https://static.vecteezy.com/system/resources/previews/016/460/773/original/acer-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png" alt="logo6" />
          </div>
          <div className="logoslider-container">
            <img src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png" alt="logo7" />
          </div>
          <div className="logoslider-container">
            <img src="https://download.logo.wine/logo/Fortinet/Fortinet-Logo.wine.png" alt="logo8" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaYErO5KCb-ti1iRZlWA9h_iZ6OmgbdDgww&s" alt="logo9" />
          </div>
          <div className="logoslider-container">
            <img src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" alt="logo10" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGbi-inUAckOwM5j1KUFrLEGDQIN1J29x8w&s" alt="logo11" />
          </div>
          <div className="logoslider-container">
            <img src="https://e7.pngegg.com/pngimages/490/758/png-clipart-intel-logo-business-about-us-blue-cdr.png" alt="logo12" />
          </div>
          <div className="logoslider-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLLu31BuAVzpMvRccrMCMl1TS53Od9T7tDA&s" alt="logo13" />
          </div>
          <div className="logoslider-container">
            <img src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" alt="logo14" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default LogoSlider;