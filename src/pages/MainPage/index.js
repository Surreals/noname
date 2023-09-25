import { Space, Button, Image } from "antd";
import Layout from "../../common/Layout";
import { useNavigate, Link } from "react-router-dom";
import { StarFilled, FlagFilled, LikeFilled, InstagramOutlined, ThunderboltFilled, FileImageFilled } from "@ant-design/icons";
import gif from '../../assets/gifs/polar-bear-polar.gif'

import "./index.scss";

const iconStyle = { fontSize: 24, verticalAlign: "baseline"}

const links = [
  // {
  //   title: "LINE-UP",
  //   route: "/line-up",
  //   icon: <ThunderboltFilled style={iconStyle} />
  // },
  {
    title: "LOCATION",
    link: "https://maps.app.goo.gl/zpDBFm2WZC8rF2od6",
    icon: <FlagFilled style={iconStyle} />
  },
  {
    title: "GALLERY",
    route: "/gallery",
    icon: <FileImageFilled style={iconStyle} />
  },
  {
    title: "TICKETS",
    route: "/tickets",
    icon: <StarFilled style={iconStyle} />,
    props: { type: "primary" },
  },
  {
    title: "DONATE",
    link: "https://send.monobank.ua/3tvYeJLzA6",
    icon: <LikeFilled style={iconStyle} />
  },
  {
    title: "INSTAGRAM",
    link: "https://www.instagram.com/nonamedvizh/?igshid=YmMyMTA2M2Y%3D",
    icon: <InstagramOutlined style={iconStyle} />
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"14.10"}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {links.map(({ title, route, props, icon, link }) => (
          <Link to={route || link} target={link && "_blank"}>
          <Button
            block
            // type={"text"}
            style={{ fontSize: 20, height: "auto" }}
            icon={icon}
            // onClick={() => navigate(route)}
            {...(props || {})}
          >
            {title}
          </Button>
          </Link>
        ))}
      </Space>
      <Image width={'70%'} style={{marginTop: 64}} src={gif}/>
    </Layout>
  );
};

export default MainPage;
