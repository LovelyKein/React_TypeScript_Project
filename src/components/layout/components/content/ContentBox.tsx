import React from 'react'
import { Outlet } from "react-router-dom";

// antd 组件
import { Layout, theme } from "antd";
const { Content } = Layout;

export default function ContentBox() {
  const { token: { colorBgContainer }} = theme.useToken()
  return (
    <div>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Outlet />
      </Content>
    </div>
  );
}
