import React, { useEffect, useState } from "react";
import { Layout as AntdLayout, theme, Space, Button } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.scss";
const { Header, Footer, Content } = AntdLayout;

const contentStyle = {
  textAlign: "center",
  padding: "0px 32px 0px",
  zIndex: 1,
  position: 'relative',
  overflow: 'hidden'
};
const footerStyle = {
  textAlign: "center",
  background: "transparent",
  fontFamily: 'Montserrat',
};
const Layout = ({ children, title, info }) => {
  const {
    token: { colorBgContainer, colorBgBase, colorTextBase },
  } = theme.useToken();
  const navigate = useNavigate();

  let match = useLocation();
  const getGradient = () => {
    console.log(match);
    switch (match.pathname) {
        case '/artists': 
            return 'lt-artists'
        default: 
            return 'lt-default'
    }
  }

  return (
    <AntdLayout className={`layout ${getGradient()}`}>
      <Header className="header">
        <h1
          onClick={() => navigate("/")}
          style={{
            fontSize: 32,
            margin: 0,
          }}
        >
          NONAMEDVIZH
        </h1>
        {title && (
          <Space>
            <h2
              style={{
                fontSize: 24,
                margin: 0,
                fontWeight: 300,
              }}
            >
              {title}
            </h2>
          </Space>
        )}
      </Header>
      <Content style={contentStyle}>
        {info && (
          <div
            className="infoWrap"
            style={{
              background: colorBgContainer,
              color: colorTextBase,
            }}
          >
            {info}
          </div>
        )}
        {children && (
          <div
            style={{
              color: colorTextBase,
            }}
          >
            {children}
          </div>
        )}
      </Content>
      <Footer style={footerStyle}>NONAMEDVIZH ©2023 Created by Surreal</Footer>
    </AntdLayout>
  );
};
export default Layout;
