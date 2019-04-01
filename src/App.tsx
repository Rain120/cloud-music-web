import * as React from 'react';
import Routes from 'src/routes/index';
import { observer, inject } from 'mobx-react';
// import { toJS } from 'mobx';
import { Store } from 'src/store/index';
import { BackTop } from 'antd';

interface AppProps {
  recommend?: any;
}

@inject((store: Store) => ({
  recommend: store.recommendStore,
}))
@observer
class App extends React.Component<AppProps, any> {
  componentWillMount() {
    this.props.recommend.getBanner();
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
