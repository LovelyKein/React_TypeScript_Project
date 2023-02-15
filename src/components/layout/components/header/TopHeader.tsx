import React from "react";
import "./TopHeader.scss";

// antd 组件
import { Layout } from "antd";
const { Header } = Layout;

export default function TopHeader() {
  return (
    <div className="topHeader">
      <Header className="header">
        <div className="header_content">
          <div className="logo"></div>
          <div className="title">
            <p>新闻管理系统</p>
          </div>
        </div>
      </Header>
    </div>
  );
}
