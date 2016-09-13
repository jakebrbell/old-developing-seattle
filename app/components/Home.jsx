import { Button, Col, Grid, Row } from 'react-bootstrap';
import Cause from 'components/Cause';
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

class Home extends React.Component {
  render() {
    const styles = {
      buttonRow: {
        margin: '40px 0'
      },
      hero: {
        background: 'url("images/seattle-skyline.jpg") center center / cover no-repeat',
        height: '500px'
      },
      mainHeader: {
        color: '#fff',
        fontSize: '6rem',
        lineHeight: '6em',
        fontWeight: '500',
        textAlign: 'right',
        paddingRight: '100px'
      },
      subHeader: {
        textAlign: 'center'
      }
    };

    return <div>
      <div style={styles.hero}>
        <h1 style={styles.mainHeader}>Developing Seattle</h1>
      </div>
      <Grid>
        <h2 style={styles.subHeader}>
          Connecting web developers with nonprofit organizations that need help
        </h2>
        <Row style={styles.buttonRow}>
          <Col xs={12} sm={6} smOffset={3}>
            <Button block bsSize="large" bsStyle="primary">
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
    </div>;
  }
}

export default Home;
