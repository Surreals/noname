import { Space, Button, Image } from "antd";
import Layout from "../../common/Layout";
import { useNavigate, Link } from "react-router-dom";
import {
  StarFilled,
  FlagFilled,
  LikeFilled,
  InstagramOutlined,
  ThunderboltFilled,
  FileImageFilled,
} from "@ant-design/icons";
import gif from "../../assets/gifs/polar-bear-polar.gif";

import "./index.scss";

const iconStyle = { fontSize: 24, verticalAlign: "baseline" };

const TicketsPage = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"14.10"}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <h3 class="p-0 m-0">Як придбати квиток?</h3>
        <li class="p-0 m-0">Оплатити 400 грн</li>
        <li class="p-0 m-0">
          Відправити скріншот оплати разом з ФІО{" "}
          <Link target="_blank" to="https://t.me/nonametickets">
            @nonametickets
          </Link>
        </li>

        <Link class="row align-items-center mt-2" target="_blank" to="https://send.monobank.ua/8B7QUm1x9A">
          <Button type="primary" class="btn btn-light">
            Придбати квиток
          </Button>
        </Link>
        <Link class="row align-items-center mt-2" target="_blank" to="https://t.me/nonametickets">
          <Button type="primary" class="btn btn-dark">
            @nonametickets
          </Button>
        </Link>

        <p class="p-0 mt-2">Квитки також можна придбати у кавярні Duffort за адресою м.Ужгород пл. Петефі 8.</p>
        <p class="p-0 mt-1">Ціна квитка на вході - 500 грн</p>
      </Space>
    </Layout>
  );
};

export default TicketsPage;
