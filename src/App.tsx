import * as React from 'react';
import Routes from 'src/routes/index';
import { query } from 'src/store/index';
import { BackTop } from 'antd';

class App extends React.Component {
  componentWillMount() {
    query();
  }

  public render() {
    return (
      <div>
        <Routes />
        <BackTop visibilityHeight={10} />
      </div>
    );
  }
}

export default App;
