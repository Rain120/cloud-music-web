import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MHeader from 'src/components/MHeader/index';
import Home from 'src/components/Home/index';
import Mine from 'src/components/Mine/index';
import Exception from 'src/components/Exception';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <MHeader />
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/my" component={Mine}/>
            <Route component={Exception}/>
          </Switch>
         </div>
      </Router>
    )
  }
}
