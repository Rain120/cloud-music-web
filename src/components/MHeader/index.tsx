import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { Row, Col, AutoComplete  } from 'antd';
import './index.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <Row
          type="flex"
          align="middle">
          <Col span={6}>
            <div className="common logo" />
          </Col>
          <Col span={8}>
            <ul className='common menus'>
              <li className="menu-active">
                <span>
                  <em>发现音乐</em>
                  <sub className="cor">&nbsp;</sub>
                </span>
              </li>
              <li>我的音乐</li>
              <li>朋友</li>
              <li>音乐人</li>
              <li>下载客户端</li>
            </ul>
          </Col>
          <Col span={6}>
            <div className='common search-box'>
              <AutoComplete
                placeholder={"音乐/视频/电台/用户"}
                dataSource={[]} />
            </div>
            <div className='common user'>user</div>
          </Col>
          <Col span={24}>
            <div className='submenus'>
              <ul>
                <li className="sub-common sub-active">
                  <span className="title">推荐</span>
                </li>
                <li className="sub-common">
                  <span className="title">排行榜</span>
                </li>
                <li className="sub-common">
                  <span className="title">歌单</span>
                </li>
                <li className="sub-common">
                  <span className="title">主播电台</span>
                </li>
                <li className="sub-common">
                  <span className="title">用户</span>
                </li>
                <li className="sub-common">
                  <span className="title">新碟上架</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
