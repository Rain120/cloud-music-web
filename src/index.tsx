import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from 'src/store/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'src/style/app.scss';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

