import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './i18n';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { adminAuthSet, adminLogout } from './store/actions/authActions';

import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import scss
import './theme.scss';

// check login status
if (localStorage.getItem('tokenFIT') && localStorage.getItem('userFIT')) {
  // axios.defaults.headers.common['x-token'] = localStorage.getItem('tokenFIT');
  store.dispatch(adminAuthSet());
} else {
  store.dispatch(adminLogout());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
