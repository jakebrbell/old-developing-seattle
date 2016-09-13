import { Button, Col, Grid, Nav, Navbar, NavItem, Row }
  from 'react-bootstrap';
import Cause from 'components/Cause';
import Radium from 'radium';
import React from 'react';
import Testimonial from 'components/Testimonial';

const causes = [
  { name: 'Animal Welfare', image: 'animal-welfare.jpg' },
  { name: 'Education', image: 'education.jpg' },
  { name: 'Environment', image: 'environment.jpg' },
  { name: 'Gender Equality', image: 'gender-equality.jpg' },
  { name: 'Homelessness', image: 'homelessness.jpg' },
  { name: 'Human Trafficking', image: 'human-trafficking.jpg' },
  { name: 'LGBTQ Issues', image: 'lgbtq-issues.jpg' },
  { name: 'Refugees', image: 'refugees.jpg' }
];

const testimonials = [
  { name: 'Hien Dang', image: 'hien-dang.jpg' },
  { name: 'Bryan Brophy', image: 'bryan-brophy.jpg' },
  { name: 'Michael Park', image: 'michael-park.jpg' }
];

class App extends React.Component {
  render() {
    const styles = {
      hero: {
        background: 'url("images/seattle-skyline.jpg") center center / cover no-repeat ',
        height: '500px'
      }
    };

    return <div>
      <Navbar fixedTop inverse style={{ borderRadius: 0, height: '70px' }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" style={{ fontSize: '26px', lineHeight: '40px', height: '70px' }}>Developing Seattle</a>
          </Navbar.Brand>
          <Navbar.Toggle style={{ height: '54px' }}/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Organizations</NavItem>
            <NavItem eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={styles.hero}>
        <h1 style={{
          color: '#fff',
          fontSize: '6rem',
          lineHeight: '6em',
          fontWeight: '500',
          textAlign: 'right',
          paddingRight: '100px'
        }}>Developing Seattle</h1>
      </div>
      <Grid>
        <h2 style={{ textAlign: 'center' }}>Connecting web developers with nonprofit organizations that need help</h2>
        <Row style={{ margin: '40px 0' }}>
          <Col xs={12} sm={6} smOffset={3}>
            <Button bsStyle="primary" bsSize="large" block>
              Browse all volunteer opportunities
            </Button>
          </Col>
        </Row>
        <Row>
          {causes.map((cause, index) => {
            return <Cause cause={cause} key={index} />;
          })}
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => {
            return <Testimonial key={index} testimonial={testimonial}/>
          })}
        </Row>
      </Grid>
      <footer style={{ backgroundColor: '#222', height: '70px', color: '#9D9D9D', padding: '25px 70px' }}>
        &copy; Developing Seattle 2016
      </footer>
    </div>;
  }
}

export default Radium(App);
