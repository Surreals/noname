import { Space, Button } from "antd";
import Layout from "../../common/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

import "./index.scss";
import { fireEvent } from "@testing-library/react";

const GalleryPage = () => {
  const navigate = useNavigate();
  var startY = 0;

  const onTouchStart = (e) =>{
    startY = e.touches[0].clientY;
  }

  const onTouchMove = (e) =>{
    // console.log(e);
  }

  const onTouchEnd = (e) =>{
    fireEvent.scroll(document.getElementById('slider'), {deltaY: startY - e.changedTouches[0].clientY })
    // document.getElementById('slider').simulate('wheel', { deltaY: startY - e.changedTouches[0].clientY });
    // console.log(e.changedTouches[0].clientY);
  }

  const onScroll = (e) =>{
    console.log(e);
  }


  return (
    <Layout title={"GALERY"}>
      <Space>
        <div class="external" id="slider"
        onWheel={onScroll}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
          <div class="horizontal-scroll-wrapper" >
            <div class="img-wrapper slower">
              <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper faster">
              <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper slower vertical">
              <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper slower slower-down">
              <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper">
              <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper slower">
              <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper faster1">
              <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt=""></img>
              </a>
            </div>
            
            <div class="img-wrapper slower slower2">
              <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt=""></img>
              </a>
            </div>
            
            <div class="img-wrapper">
              <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt=""></img>
              </a>
            </div>
            
            <div class="img-wrapper slower">
              <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt=""></img>
              </a>
            </div>

            <div class="img-wrapper">
              <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt=""></img>
              </a>
            </div>
            
            <div class="img-wrapper slower last">
              <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt=""></img>
              </a>
            </div>
            
          </div>
        </div>
      </Space>
    </Layout>
  );
};

export default GalleryPage;
