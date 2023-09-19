import React, { useEffect, useState } from "react";
import { Layout as AntdLayout, theme } from "antd";
import "./index.css";
const { Header, Footer, Content } = AntdLayout;

const contentStyle = {
  textAlign: "center",
  padding: "0 48px",
};
const footerStyle = {
  textAlign: "center",
  background: "transparent",
};
const Layout = ({ children }) => {
  const {
    token: { colorBgContainer, colorBgBase, colorTextBase },
  } = theme.useToken();

  return (
    <AntdLayout className="layout">
      <Header className="header" style={{ background:  'transparent' || colorBgBase }}>NONAMEDVIZH</Header>
      <Content style={contentStyle}>
        <div
          style={{
            background: colorBgContainer,
            padding: 24,
            color: colorTextBase,
            borderRadius: 14
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={footerStyle}>NONAMEDVIZH ©2023 Created by Surreal</Footer>
    </AntdLayout>
  );
};
export default Layout;
