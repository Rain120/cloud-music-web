import React from 'react';
import config from './config';
import './index.scss';

export interface ExceptionProps {
  type: "404";
  title?: React.ReactNode;
  desc?: React.ReactNode;
  img?: string;
  actions?: React.ReactNode;
  linkElement?: any;
  style?: React.CSSProperties;
}

export default class Exception extends React.Component<ExceptionProps, any> {
  render() {
    const { linkElement = 'a', type, title, desc, img, actions, ...rest } = this.props;
    const pageType = '404';

    return (
      <div className="exception" {...rest}>
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{ backgroundImage: `url(${img || config[pageType].img})` }}
          />
        </div>
        <div className="content">
          <h1>{title || config[pageType].title}</h1>
          <div className="desc">{desc || config[pageType].desc}</div>
        </div>
      </div>
    )
  }
}
