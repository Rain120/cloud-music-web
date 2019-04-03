import React, { Component } from "react";
import "./index.scss";
import { Store } from 'src/store/index';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import { Icon, Row, Col, Button } from "antd";

interface HomeProps {
  recommend?: any;
}

@inject((store: Store) => ({
  recommend: store.recommendStore,
}))
@observer
export default class Home extends Component<HomeProps, any> {

  componentWillMount() {
    this.props.recommend.loadBanner();
  }

  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      lazy: {
        loadPrevNext: true,
      },
      observer: true,
    });
}


  render() {
    const { recommend } = this.props;
    let lists = toJS(recommend.banners)
    return (
      <div className="home-wrapper">
        <div className="carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {lists.map((list, index) => (
                <div key={index} className="swiper-slide">
                  <div className="slide">
                    <img src={list.imageUrl} className="swiper-lazy" />
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
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
