import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'src/components/Layout/index';
import Home from 'src/components/Home/index';
import Mine from 'src/components/Mine/index';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/my" component={Mine}/>
          </Switch>
         </Layout>
      </Router>
    )
  }
}
