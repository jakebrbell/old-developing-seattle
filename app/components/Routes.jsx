import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import OrgList from 'components/OrgList';
import React from 'react';

class Routes extends React.Component {
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={OrgList} path="/organizations" />
      </Route>
    </Router>;
  }
}

export default Routes;
