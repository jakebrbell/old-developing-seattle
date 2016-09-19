import { Provider } from 'react-redux';
import React, { PropTypes } from 'react';
import Routes from 'components/Routes';

const Root = ({ store }) => <Provider store={store}>
  <Routes />
</Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
