import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import FelaProvider from './fela/FelaProvider';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <FelaProvider>
      <App />
    </FelaProvider>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
