import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router';
import React from 'react';
import cookie from 'react-cookie';
import axios from 'axios';

class MainNav extends React.Component {
  handleClickOrgs() {
    this.props.router.push('/organizations');
  }

  handleClickLogin() {
    this.props.router.push('/login');
  }

  handleClickLogout() {
    axios.delete('/api/token')
      .then(() => {
        console.log('Logged out');
      })
      .catch((err) => {
        console.error(err);
      });
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
          <NavItem eventKey={1} onClick={this.handleClickOrgs.bind(this)}>Organizations</NavItem>
          {cookie.load('loggedIn') ?
            <NavItem eventKey={2} onClick={this.handleClickLogout.bind(this)}>Logout</NavItem> :
            <NavItem eventKey={2} onClick={this.handleClickLogin.bind(this)}>Login</NavItem>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default withRouter(MainNav);
