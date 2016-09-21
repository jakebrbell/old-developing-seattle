import React, { Component } from 'react';
import OrgProfileShort from 'components/OrgProfileShort';
import { connect } from 'react-redux';

class OrgProfileShortContainer extends Component {
  render() {
    return <div>
      {this.props.orgs.map((org, index) => {
        return <OrgProfileShort key={index} org={org} />;
      })}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orgs: state.orgs
  };
};

export default connect(
  mapStateToProps
)(OrgProfileShortContainer);
