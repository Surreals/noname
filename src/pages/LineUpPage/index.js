import { Space, Image } from "antd";
import Layout from "../../common/Layout";
import { useEffect, useState } from "react";
import "./index.scss";

const LineUpPage = () => {
  const [image, setImage] = useState('../../assets/IMG_4172.webp');
  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
    };

    // The strings to morph between. You can change these to anything you want!
    const artists = [
      { artist: "Surreal", imgPath: "../../assets/IMG_4172.webp" },
      { artist: "Siberian_Sun", imgPath: "../../assets/IMG_4172.webp" },
      { artist: "hackedface", imgPath: "../../assets/IMG_4172.webp" },
      { artist: "Sick_Solution", imgPath: "../../assets/IMG_4172.webp" },
      { artist: "ESHKA", imgPath: "../../assets/IMG_4172.webp" },
    ];
    const texts = artists.map(({ artist }) => artist);

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 1.75;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

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

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];

      setImage(artists[textIndex % texts.length].imgPath);
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
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
      <Space className={"morph"}>
        <div>
          <div id="container">
            <span id="text1"></span>
            <span id="text2"></span>
          </div>
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
        {image && <Image src={image} />}
        {image && <img src={image} />}
      </Space>
    </Layout>
  );
};

export default LineUpPage;
