import * as React from 'react';
import Routes from 'src/routes/index';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider, BackTop } from 'antd';
import { Provider } from 'mobx-react';

interface AppProps {
  store: any;
}

class App extends React.Component<AppProps, any> {

  public render() {
    const { store } = this.props;
    return (
      <Provider {...store}>
        <LocaleProvider locale={zhCN}>
          <div>
            <Routes />
            <BackTop />
          </div>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
