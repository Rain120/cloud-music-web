import * as React from 'react';
import Routes from 'src/routes/index';
import { query } from 'src/store/index';

class App extends React.Component {
  componentWillMount() {
    query();
  }

  public render() {
    return (
      <Routes />
    );
  }
}

export default App;
