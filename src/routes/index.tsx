/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2019-03-21 21:23:13
 * @LastEditTime: 2019-03-25 22:58:39
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MHeader from 'src/components/MHeader/index';
import Home from 'src/components/Home/index';
import Mine from 'src/components/Mine/index';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <MHeader />
          <div style={{ clear: 'both' }}/>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/my" component={Mine}/>
          </Switch>
         </div>
      </Router>
    )
  }
}
