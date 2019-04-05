import React, { Component } from "react";
import "./index.scss";
import { Store } from 'src/store/index';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import * as Graphics from 'src/container/base/Graphics';
import { Icon, Row, Col, Button } from "antd";

interface HomeProps {
  recommend?: any;
}

@inject((store: Store) => ({
  recommend: store.recommendStore,
}))
@observer
export default class Home extends Component<HomeProps, any> {

  state = {
    isLogin: true,
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { recommend } = this.props;
    recommend.loadBanner();
    recommend.loadTags();
    recommend.loadSongLists();
    recommend.loadAlbums();
    recommend.loadRankLists();
  }

  componentDidMount() {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      effect : 'coverflow',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
    });
  }

  more = (custom = {}) => {
    let style = {
      marginLeft: '5px',
      ...custom,
    };
    return (
      <span className="more">更多<Icon type="arrow-right" style={style} /></span>
    )
  }

  render() {
    const { isLogin } = this.state;
    const { recommend } = this.props;
    let banners: any = toJS(recommend.banners);
    let tags: any = toJS(recommend.tags);
    let songLists: any = toJS(recommend.songLists);
    let albums: any = toJS(recommend.albums);
    let rankLists: any = toJS(recommend.rankLists);
    let options: any = {
      style: {
        marginRight: '10px',
        border: '5px solid #BC4141',
      } as any,
    }
    return (
      <div className="home-wrapper">
        <div className="carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {banners.map((banner, index) => (
                <div key={index} className="swiper-slide">
                  <div className="slide">
                    <img src={banner.imageUrl} className="swiper-lazy" />
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
        <Row className="left-content">
          <Col span={17}>
            <div className="discover-module">
              <div className="l-common recommend">
                <div className="header-nav">
                  {
                    Graphics.CustomizeCircle(options)
                  }
                  <span className="title">热门推荐</span>
                  <span className="tags">
                    {
                      tags && tags.slice(0, 5).map((tag) => (
                        <span className="tag" key={tag.id}>{tag.name}</span>
                      ))
                    }
                  </span>
                  { this.more({ color: '#BC4141'}) }
                </div>
                <Row
                  type="flex"
                  align="middle" >
                  {
                    songLists.result && songLists.result.slice(0, 8).map((list) => (
                      <Col span={6} key={list.id}>
                        <div className="song-list">
                          <div className="list-info">
                            <img src={list.picUrl} />
                          </div>
                          <p className="list-name nowrap-nums">{list.name}</p>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              </div>
              {
                isLogin && (
                  <div className="l-common new-album">
                    <div className="header-nav">
                      {
                        Graphics.CustomizeCircle(options)
                      }<span className="title">个性化推荐</span>
                    </div>
                  </div>
              )}
              <div className="l-common new-album">
                <div className="header-nav">
                  {
                    Graphics.CustomizeCircle(options)
                  }<span className="title">新碟上架</span>
                  { this.more({ color: '#BC4141'}) }
                </div>
              </div>
              <div className="l-common rank-lists">
                <div className="header-nav">
                  {
                    Graphics.CustomizeCircle(options)
                  }<span className="title">榜单</span>
                  { this.more({ color: '#BC4141'}) }
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
