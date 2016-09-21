import React, { Component } from 'react';
import OrgProfileFull from 'components/OrgProfileFull';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class OrgProfileFullContainer extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { orgs, routeParams } = this.props;
    const orgId = Number.parseInt(routeParams.orgId);
    let currentOrg;

    if (orgs.length > 0) {
      for (const org of orgs) {
        if (org.id === orgId) {
          currentOrg = org;
        }
      }

      return <OrgProfileFull org={currentOrg}/>;
    }

    return <div />;

  }
}

const mapStateToProps = (state) => {
  return {
    orgs: state.orgs
  };
};

export default withRouter(connect(
  mapStateToProps
)(OrgProfileFullContainer));
