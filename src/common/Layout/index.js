import React, { useEffect, useState } from "react";
import { Layout as AntdLayout, theme, Space, Button } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const { Header, Footer, Content } = AntdLayout;

const contentStyle = {
  textAlign: "center",
  padding: "0px 32px 0px",
  zIndex: 1,
};
const footerStyle = {
  textAlign: "center",
  background: "transparent",
};
const Layout = ({ children, title, info }) => {
  const {
    token: { colorBgContainer, colorBgBase, colorTextBase },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <AntdLayout className="layout">
      <Header className="header" style={{ background: colorBgContainer }}>
        <h1
          onClick={() => navigate('/')}
          style={{
            fontSize: 42,
            margin: 0,
          }}
        >
          NONAMEDVIZH
        </h1>
        {title && (
          <Space>
            <Button
              type="text"
              style={{ display: "contents" }}
              icon={
                <CaretLeftFilled
                  style={{
                    fontSize: 32,
                  }}
                />
              }
            />
            <h2
              style={{
                fontSize: 32,
                margin: 0,
                fontWeight: 300
              }}
            >
              {title}
            </h2>
            <Button
              type="text"
              style={{ display: "contents" }}
              icon={
                <CaretRightFilled
                  style={{
                    fontSize: 32,
                  }}
                />
              }
            />
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
