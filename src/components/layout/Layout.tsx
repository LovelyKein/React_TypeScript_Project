import React from 'react'

import "./Layout.scss"

// components
import SideBar from './components/sider/SideBar'; // 侧边栏
import TopHeader from './components/header/TopHeader'; // 顶部导航
import ContentBox from './components/content/ContentBox'; // 内容区域盒子
import CrumbsNav from './components/crumbs/CrumbsNav'; // 面包屑导航

// antd 组件
import { Layout } from 'antd'

export default function LayoutBox() {
  return (
    <div className='layoutBox'>
      <Layout className='antLayout'>
        <TopHeader />
        <Layout className='containerLayout'>
          <SideBar width={260} />
          <Layout className='contentLayout'>
            <CrumbsNav />
            <ContentBox />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
