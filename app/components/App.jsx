import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';

class App extends React.Component {
  render() {

    return <div>
      <MainNav />
      {React.cloneElement(this.props.children)}
      <Footer />
    </div>;
  }
}

export default App;
