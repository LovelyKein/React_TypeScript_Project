import React from 'react'

// antd 组件
import { Breadcrumb } from "antd"

export default function CrumbsNav() {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
