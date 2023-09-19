import { Space, Image, Button } from "antd";
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
  const [image1, setImage1] = useState(eshka);
  const [image2, setImage2] = useState(surreal);
  const [artist, setArtist] = useState();
  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
      img1: document.getElementById("image1"),
      img2: document.getElementById("image2"),
    };

    // The strings to morph between. You can change these to anything you want!

    const texts = artists.map(({ artist }) => artist);

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 5.5;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    setImage1(artists[textIndex % texts.length].imgPath);
    setImage2(artists[(textIndex + 1) % texts.length].imgPath);
    setArtist(artists[(textIndex + 1) % texts.length]);

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    // A lot of the magic happens here, this is what applies the blur filter to the text.
    function setMorph(fraction) {
      // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.img2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.img2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.img1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.img1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];

      setImage1(artists[textIndex % texts.length].imgPath);
      setImage2(artists[(textIndex + 1) % texts.length].imgPath);
      setArtist(artists[(textIndex + 1) % texts.length]);
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";
      elts.img2.style.filter = "";
      elts.img2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
      elts.img1.style.filter = "";
      elts.img1.style.opacity = "0%";
    }

    // Animation loop, which is called every frame.
    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    // Start the animation.
    animate();
  }, []);
  return (
    <Layout title={"LINE-UP"}>
      <Space className={"morph"} direction="vertical">
        <div id="container">
          <span id="text1"></span>
          <span id="text2"></span>
          <svg id="filters">
            <defs>
              <filter id="threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div id="container2">
          {image1 && <Image width={"100%"} id="image1" src={image1} />}
          {image2 && <Image width={"100%"} id="image2" src={image2} />}
        </div>
      </Space>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={artist && artist.spoty} target="_blank">
          <Button
            disabled={!artist || !artist.spoty}
            block
            type="text"
            icon={<SoundOutlined style={{ fontSize: 54 }} />}
          />
        </Link>

        <Link to={artist && artist.youtube} target="_blank">
          <Button
            disabled={!artist || !artist.youtube}
            block
            type="text"
            icon={<YoutubeOutlined style={{ fontSize: 54 }} />}
          />
        </Link>

        <Link to={artist && artist.inst} target="_blank">
          <Button
            disabled={!artist || !artist.inst}
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
