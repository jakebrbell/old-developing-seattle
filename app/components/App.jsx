import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';

class App extends React.Component {
  render() {
    return <div>
      <MainNav />
      <div style={{ minHeight: 'calc(100vh - 170px)' }}>
        {React.cloneElement(this.props.children)}
      </div>
      <Footer />
    </div>;
  }
}

export default App;
