import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';

class App extends React.Component {
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

export default App;
