import { Col, Image } from 'react-bootstrap';
import Radium from 'radium';
import React from 'react';

class Testimonial extends React.Component {
  render() {
    const { testimonial } = this.props;

    const styles = {
      testimonial: {
        fontSize: '18px',
        padding: '10px 30px',
        textAlign: 'center'
      },
      testimonialImg: {
        display: 'block',
        margin: '40px auto 20px',
        width: '250px'
      },
      testimonialName: {
        fontSize: '18px',
        textAlign: 'center'
      }
    };

    return <Col xs={12} md={4}>
      <Image
        circle
        src={`images/${testimonial.image}`}
        style={styles.testimonialImg}
      />
      <p style={styles.testimonial}>"I was looking for a good cause to support and Developing Seattle helped pair me with a great nonprofit that is working to solve the greatest issues of our time."</p>
      <p style={styles.testimonialName}>~ {testimonial.name}</p>
    </Col>;
  }
}

export default Radium(Testimonial);
