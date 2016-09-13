import { Col } from 'react-bootstrap';
import Radium from 'radium';
import React from 'react';

class Testimonial extends React.Component {
  render() {
    return <Col xs={12} md={4}>
      <img src={`images/${this.props.testimonial.image}`} style={{ borderRadius: '50%', display: 'block', width: '250px', margin: '40px auto 20px' }} />
      <p style={{ textAlign: 'center', padding: '10px 30px', fontSize: '18px' }}>"I was looking for a good cause to support and Developing Seattle helped pair me with a great nonprofit that is working to solve the greatest issues of our time."</p>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>~ {this.props.testimonial.name}</p>
    </Col>;
  }
}

export default Radium(Testimonial);
