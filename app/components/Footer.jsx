import React from 'react';

class Footer extends React.Component {
  render() {
    const styles = {
      footer: {
        backgroundColor: '#222',
        color: '#9D9D9D',
        height: '70px',
        padding: '25px 70px'
      }
    };

    return <footer style={styles.footer}>
      &copy; Developing Seattle 2016
    </footer>
  }
}

export default Footer;
