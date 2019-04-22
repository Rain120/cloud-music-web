import * as React from 'react';
import Routes from 'src/routes/index';
import { Provider } from 'mobx-react';
import store from 'src/store/index';

class App extends React.Component {
  componentWillMount() {}

  public render() {
    return (
      <Provider {...store}>
        <Routes />
        </Provider>
    );
  }
}

export default App;
