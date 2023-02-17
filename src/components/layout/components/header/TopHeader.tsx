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
          <div className="header_content_left">
            <div className="logo">
              <span className="iconfont icon-social-_logo-px"></span>
            </div>
            <div className="title">
              <p>无限信息化智能新闻管理系统</p>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
