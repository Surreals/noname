import React, { useEffect, useState } from "react";
import { Layout as AntdLayout, theme } from "antd";
import "./index.scss";
const { Header, Footer, Content } = AntdLayout;

const contentStyle = {
  textAlign: "center",
  padding: "8px 32px 0px",
  zIndex: 1,
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
      {/* <div>
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
        <div class="layer layer-6"></div>
      </div> */}
      <Header className="header" style={{ background: "transparent" || colorBgBase }}>
        NONAMEDVIZH
      </Header>
      <Content style={contentStyle}>
        <div
          className="childrenWrap"
          style={{
            background: colorBgContainer,
            color: colorTextBase,
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
