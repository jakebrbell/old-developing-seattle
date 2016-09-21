import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchOrgs();
  }

  render() {
    return <div>
      <MainNav />
      <main style={{ minHeight: 'calc(100vh - 170px)' }}>
        {React.cloneElement(this.props.children)}
      </main>
      <Footer />
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orgs: state.orgs
  };
};

export default connect(mapStateToProps, actions)(App);
