import React from 'react'
import { Outlet } from "react-router-dom";

// 样式
import './ContentBox.scss'

// antd 组件
import { Layout, theme } from "antd";
const { Content } = Layout;

export default function ContentBox() {
  const { token: { colorBgContainer }} = theme.useToken() // 主题
  return (
    <div className='contentBox'>
      <Content
        style={{
          background: colorBgContainer,
        }}
        className="content_container"
      >
        <Outlet />
      </Content>
    </div>
  );
}
