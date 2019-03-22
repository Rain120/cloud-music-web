import * as React from 'react';
import Routes from 'src/routes/index';
import request from 'src/utils/request';

class App extends React.Component {
  componentWillMount() {
    this.load();
  }

  load = () => {
    return (async function query() {
      await request('/recommend/resource', 'get', {});
    })()
  }

  public render() {
    return (
      <Routes />
    );
  }
}

export default App;
