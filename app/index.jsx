import configureStore from './configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
