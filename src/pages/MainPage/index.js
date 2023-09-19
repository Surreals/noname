import { Space, Button } from "antd";
import Layout from "../../common/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

import "./index.scss";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Layout
      info={
        <Space>
          <Button
            type={"text"}
            style={{ fontSize: 28, height: "auto" }}
            icon={<StarFilled />}
            onClick={() => navigate("/artists")}
          >
            ARTISTS
          </Button>
        </Space>
      }
    ></Layout>
  );
};

export default MainPage;
