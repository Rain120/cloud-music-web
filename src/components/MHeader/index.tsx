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
          <Col span={8}>
            <div>网易云音乐</div>
          </Col>
          <Col span={8}>
            <ul className='menus'>
              <li>发现音乐</li>
              <li>我的音乐</li>
              <li>朋友</li>
              <li>音乐人</li>
              <li>下载客户端</li>
            </ul>
          </Col>
          <Col span={8}>
            <div className='search-box'>
              <AutoComplete dataSource={[]} />
            </div>
            <div className='user'>user</div>
          </Col>
          <Col span={24}>
            <div className='submenus'>123</div>
          </Col>
        </Row>
      </div>
    )
  }
}
