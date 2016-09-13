import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router';
import React from 'react';

class MainNav extends React.Component {
  handleClick() {
    this.props.router.push('/organizations');
  }

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
          <Link to={'/'} style={styles.logo}>Developing Seattle</Link>
        </Navbar.Brand>
        <Navbar.Toggle style={styles.hamburger} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={this.handleClick.bind(this)}>Organizations</NavItem>
          <NavItem eventKey={2} href="#">Login</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default withRouter(MainNav);
