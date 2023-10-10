import { Space, Image, Button, Carousel } from "antd";
import Layout from "../../common/Layout";
import { useEffect, useState } from "react";
import { InstagramOutlined, SoundOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import surreal from "../../assets/images/srl.jpg";
import eshka from "../../assets/images/eshka.jpg";
import hacked from "../../assets/images/hckedface.jpg";
import camp from "../../assets/images/camp.jpg";
import "./index.scss";

const artists = [
  { artist: "Surreal", imgPath: surreal, spoty: "ss", inst: "ss", youtube: "dd" },
  { artist: "Siberian_Sun", imgPath: camp },
  { artist: "hackedface", imgPath: hacked },
  { artist: "Sick_Solution", imgPath: camp },
  { artist: "ESHKA", imgPath: eshka },
];

const LineUpPage = () => {
  const [slide, setSlide] = useState(0);
  const onChange = (currentSlide) => {
    setSlide(currentSlide);
  };
  return (
    <Layout title={"LINE-UP"}>
      <Carousel autoplay afterChange={onChange}>
        {artists.map(({ artist, imgPath }) => (
          <div>
            <h2>{artist}</h2>
            <Image width={"100%"} src={imgPath} />
          </div>
        ))}
      </Carousel>

      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: 12 }}>
        <Link to={artists[slide] && artists[slide].spoty} target="_blank">
          <Button
            disabled={!artists[slide] || !artists[slide].spoty}
            block
            type="text"
            icon={<SoundOutlined style={{ fontSize: 54 }} />}
          />
        </Link>

        <Link to={artists[slide] && artists[slide].youtube} target="_blank">
          <Button
            disabled={!artists[slide] || !artists[slide].youtube}
            block
            type="text"
            icon={<YoutubeOutlined style={{ fontSize: 54 }} />}
          />
        </Link>

        <Link to={artists[slide] && artists[slide].inst} target="_blank">
          <Button
            disabled={!artists[slide] || !artists[slide].inst}
            block
            type="text"
            icon={<InstagramOutlined style={{ fontSize: 54 }} />}
          />
        </Link>
      </div>
    </Layout>
  );
};

export default LineUpPage;
