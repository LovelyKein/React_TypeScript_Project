import React from 'react'

// 样式
import './CrumbsNax.scss'

// antd 组件
import { Breadcrumb } from "antd"

export default function CrumbsNav() {
  return (
    <div className="crumbsNav">
      <Breadcrumb className='crumbsBox'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
