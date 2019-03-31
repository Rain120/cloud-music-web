import React, { Component } from "react";
import "./index.scss";
import { Icon, Row, Col, Button } from "antd";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="carousel">Carousel</div>
        <Row className="left-content">
          <Col span={17}>
            <div className="discover-module">
              <div className="l-common recommend">
                <div className="header-nav">
                  <span className="title">热门推荐</span>
                  <span className="more">更多<Icon type="arrow-right" style={{ marginLeft: '5px' }} /></span>
                </div>
              </div>
              <div className="l-common new-album">
                <div className="header-nav">
                  <span className="title">新碟上架</span>
                  <span className="more">更多<Icon type="arrow-right" style={{ marginLeft: '5px' }} /></span>
                </div>
              </div>
              <div className="l-common rank-lists">
                <div className="header-nav">
                  <span className="title">榜单</span>
                  <span className="more">更多<Icon type="arrow-right" style={{ marginLeft: '5px' }} /></span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={7}>
            <div className="right-content">
              <div className="my-info">
                <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <div className="login">
                  <Button type="primary">用户登录</Button>
                </div>
              </div>
              <div className="n-singers r-common">
                <div className="r-header">
                  <span className="r-title">入驻歌手</span>
                  <span className="r-more">查看更多 ></span>
                </div>
              </div>
              <div className="top-anchors r-common">
                <div className="r-header">
                  <span className="r-title">热门主播</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
