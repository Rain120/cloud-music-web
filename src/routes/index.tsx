/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2019-03-21 21:23:13
 * @LastEditTime: 2019-03-31 19:48:05
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MHeader from 'src/container/components/MHeader/index';
import Home from 'src/container/components/Home/index';
import Mine from 'src/container/components/Mine/index';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <MHeader />
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/my" component={Mine}/>
          </Switch>
         </div>
      </Router>
    )
  }
}
