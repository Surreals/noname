import { Image, Button, Carousel } from "antd";
import Layout from "../../common/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import SURR from "../../assets/posters/SURR.jpg";
import SN from "../../assets/posters/SN.jpg";
import SICKSOLUTION from "../../assets/posters/SICKSOLUTION.jpg";
import spotify from "../../assets/social_logos/spotify.png";
import inst from "../../assets/social_logos/inst.png";
import youtube from "../../assets/social_logos/youtube.png";
import "./index.scss";

const artists = [
  {
    artist: "Surreal",
    imgPath: SURR,
    spoty: "https://open.spotify.com/artist/0cpL1ooyiyxpJ4KRz8ILWW?si=cB1ePZXORSiEsYv5Zc5Lsg",
    inst: "https://www.instagram.com/surreal4you/",
    youtube: "https://www.youtube.com/@surreal4you",
  },
  {
    artist: "Siberian_Sun",
    imgPath: SN,
    spoty: "https://open.spotify.com/artist/4Md7h2zQk811uguAgMZRhz?si=r3WrxzQFSpWB4-O3c3rd-w",
    inst: "https://www.instagram.com/siberian.sun.official/",
    youtube: "https://www.youtube.com/@siberiansun7",
  },
  {
    artist: "Sick_Solution",
    imgPath: SICKSOLUTION,
    spoty: "https://open.spotify.com/artist/5I8Ea6B50cE6NR6HL6BHa6?si=-_XjaClTTvWvtE92R2TwAQ",
    inst: "https://www.instagram.com/sicksolutionhc/",
    youtube: "https://www.youtube.com/@sicksolution3327",
  },
];

const LineUpPage = () => {
  const [slide, setSlide] = useState(0);
  const onChange = (currentSlide) => {
    setSlide(currentSlide);
  };
  return (
    <Layout title={"LINE-UP"}>
      <Carousel autoplay afterChange={onChange} effect={"fade"}>
        {artists.map(({ artist, imgPath }) => (
          <div>
            <h2 style={{ fontSize: 22 }}>{artist}</h2>
            <Image src={imgPath} preview={false} style={{ borderRadius: 2 }} />
          </div>
        ))}
      </Carousel>

      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: 36, alignItems: 'center' }}>
        <Link to={artists[slide] && artists[slide].spoty} target="_blank" className="socialBtnWrap">
          <Button
            disabled={!artists[slide] || !artists[slide].spoty}
            block
            type="text"
            className="socialBtn"
            // icon={<SoundOutlined style={{ fontSize: 48 }} />}
          >
            <img className="socialLogo" src={spotify} alt="Spotify" />
          </Button>
        </Link>

        <Link to={artists[slide] && artists[slide].youtube} target="_blank" className="socialBtnWrap">
          <Button
            disabled={!artists[slide] || !artists[slide].youtube}
            block
            type="text"
            className="socialBtn"
            // icon={<YoutubeOutlined style={{ fontSize: 48 }} />}
          >
            <img className="socialLogo" src={youtube} alt="YouTube" style={{ width: 57 }} />
          </Button>
        </Link>

        <Link to={artists[slide] && artists[slide].inst} target="_blank" className="socialBtnWrap">
          <Button
            disabled={!artists[slide] || !artists[slide].inst}
            block
            type="text"
            className="socialBtn"
            // icon={<InstagramOutlined style={{ fontSize: 48 }} />}
          >
            <img className="socialLogo" src={inst} alt="Instagram" style={{ width: 58 }} />
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default LineUpPage;
