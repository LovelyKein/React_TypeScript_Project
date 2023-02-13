import React from 'react'

import './skeleton.scss'

// 骨架屏， 用于页面之间的过渡
export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton_top" />
      <div className="skeleton_content">
        <div className="skeleton_menu">
          <div className="skeleton_menu_item" />
          <div className="skeleton_menu_item" />
          <div className="skeleton_menu_item" />
          <div className="skeleton_menu_item" />
          <div className="skeleton_menu_item" />
          <div className="skeleton_menu_item" />
        </div>
        <div className="skeleton_context">
          <div className="skeleton_context_filter" />
          <div className="skeleton_context_list">
            <div className="skeleton_context_item">
              <div className="skeleton_context_item_circle" />
              <div className="skeleton_context_item_text">
                <div className="skeleton_context_item_text_box" />
                <div className="skeleton_context_item_text_box" />
              </div>
            </div>
            <div className="skeleton_context_item">
              <div className="skeleton_context_item_circle" />
              <div className="skeleton_context_item_text">
                <div className="skeleton_context_item_text_box" />
                <div className="skeleton_context_item_text_box" />
              </div>
            </div>
            <div className="skeleton_context_item">
              <div className="skeleton_context_item_circle" />
              <div className="skeleton_context_item_text">
                <div className="skeleton_context_item_text_box" />
                <div className="skeleton_context_item_text_box" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
