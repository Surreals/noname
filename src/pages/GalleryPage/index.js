import { Space, Button } from "antd";
import Layout from "../../common/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import image1 from "../../assets/images/1.webp";
import image2 from "../../assets/images/2.webp";
import image3 from "../../assets/images/3.webp";
import image4 from "../../assets/images/4.webp";
import image5 from "../../assets/images/5.webp";
import image6 from "../../assets/images/6.webp";
import image7 from "../../assets/images/7.webp";
import image8 from "../../assets/images/8.webp";
import image9 from "../../assets/images/9.webp";
import image10 from "../../assets/images/10.webp";
import image11 from "../../assets/images/11.webp";
import image12 from "../../assets/images/12.webp";
import image13 from "../../assets/images/13.webp";
import image14 from "../../assets/images/14.webp";
import image15 from "../../assets/images/15.webp";
import image16 from "../../assets/images/16.webp";
import image17 from "../../assets/images/17.webp";
import image18 from "../../assets/images/18.webp";
import image19 from "../../assets/images/19.webp";
import image20 from "../../assets/images/20.webp";
import image21 from "../../assets/images/21.webp";
import image22 from "../../assets/images/22.webp";
import image23 from "../../assets/images/23.webp";
import image24 from "../../assets/images/24.webp";
import image25 from "../../assets/images/25.webp";
import image26 from "../../assets/images/26.webp";
import image27 from "../../assets/images/27.webp";
import image28 from "../../assets/images/28.webp";

import "./index.scss";
import { fireEvent } from "@testing-library/react";

const GalleryPage = () => {
  const navigate = useNavigate();
  var startY = 0;
  var sliderTop = 0;


  const onTouchStart = (e) =>{
    startY = e.touches[0].clientY;
  }

  const onTouchMove = (e) =>{
    if (e.changedTouches && e.changedTouches.length) {
      var change = startY - e.changedTouches[0].clientY;
      sliderTop = sliderTop + change; 
      startY = e.changedTouches[0].clientY;
      console.log(sliderTop, startY, change);
      document.getElementById('slider').scrollTo({top: sliderTop, left: 0});
    }
  }

  const onTouchEnd = (e) =>{
    sliderTop = sliderTop + startY - e.changedTouches[0].clientY;
    document.getElementById('slider').scrollTo({top: sliderTop, left: 0});
  }

  return (
    <Layout title={"GALERY"}>
      <Space>
        <div class="external" 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
          <div class="horizontal-scroll-wrapper" id="slider">
            <div class="img-wrapper slower">
              <div>
                <img src={image1} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster">
              <div>
                <img src={image2} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower vertical">
              <div>
                <img src={image3} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower slower-down">
              <div>
                <img src={image4} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image5} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower">
              <div>
                <img src={image6} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster1">
              <div>
                <img src={image7} alt=""></img>
              </div>
            </div>
            
            <div class="img-wrapper slower slower2">
              <div>
                <img src={image8} alt=""></img>
              </div>
            </div>
            
            <div class="img-wrapper">
              <div>
                <img src={image9} alt=""></img>
              </div>
            </div>
            
            <div class="img-wrapper slower">
              <div>
                <img src={image10} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image11} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower">
              <div>
                <img src={image12} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster">
              <div>
                <img src={image13} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower vertical">
              <div>
                <img src={image14} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower slower-down">
              <div>
                <img src={image15} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image16} alt=""></img>
              </div>
            </div>
            
            <div class="img-wrapper slower">
              <div>
                <img src={image17} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image18} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower">
              <div>
                <img src={image19} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster1">
              <div>
                <img src={image20} alt=""></img>
              </div>
            </div>
            
            <div class="img-wrapper slower slower2">
              <div>
                <img src={image21} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image22} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower">
              <div>
                <img src={image23} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster">
              <div>
                <img src={image24} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper">
              <div>
                <img src={image25} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper faster1">
              <div>
                <img src={image26} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower slower2">
              <div>
                <img src={image27} alt=""></img>
              </div>
            </div>

            <div class="img-wrapper slower last">
              <div>
                <img src={image28} alt=""></img>
              </div>
            </div>
            
          </div>
        </div>
      </Space>
    </Layout>
  );
};

export default GalleryPage;
