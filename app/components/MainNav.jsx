import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react';

class MainNav extends React.Component {
  render() {
    const styles = {
      hamburger: {
        height: '54px'
      },
      logo: {
        fontSize: '26px',
        height: '70px',
        lineHeight: '40px'
      },
      navbar: {
        borderRadius: 0,
        height: '70px'
      }
    };

    return <Navbar fixedTop inverse style={styles.navbar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#" style={styles.logo}>Developing Seattle</a>
        </Navbar.Brand>
        <Navbar.Toggle style={styles.hamburger} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Organizations</NavItem>
          <NavItem eventKey={2} href="#">Login</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default MainNav;
