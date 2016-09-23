import { Button, Col, Grid, Row } from 'react-bootstrap';
import Cause from 'components/Cause';
import React from 'react';
import Testimonial from 'components/Testimonial';
import { withRouter } from 'react-router';

const causes = [
  { name: 'Animal Welfare', image: 'animal-welfare.jpg', desc: 'Use your power to give a voice to the voiceless. Raising awareness of animal cruelty, whether by owners of mistreated animals, or by corporate entities in the agricultural, medical, and entertainment industries, can help ensure the rights of animals are respected.' },
  { name: 'Education', image: 'education.jpg', desc: 'Every child has the right to a quality education yet thousands of students are disadvantaged due to circumstances beyond their control. Providing resources to students and teachers is the greatest investment we can make in our future.' },
  { name: 'Environment', image: 'environment.jpg', desc: 'Time is running out to stave off the extreme consequences of global climate change.  Only together can we make a lasting difference.  Individual responsiblity must be coupled with support for sensible laws and policies if we hope to stem the tide of environmental decay.' },
  { name: 'Gender Equality', image: 'gender-equality.jpg', desc: 'Imagine a world where rights and opportunities are unaffected by gender.  While progress has been made toward this goal, issues including women\'s health, violence against women, pay equity, paid family leave and others remain at the forefront of leveling the playing field for all.' },
  { name: 'Homelessness', image: 'homelessness.jpg', desc: 'Everyday individuals who are unable to acquire and maintain safe and adequate housing are forced to seek out shelter in the most inhospitable of places.  Everyone has the right to a standard of living adequate for their own health and well-being.' },
  { name: 'Human Trafficking', image: 'human-trafficking.jpg', desc: 'Human trafficking is the use of force to compel a person into any form of labor against their will. It is a form of modern-day slavery and one of the fastest growing criminal industries in the world with children accounting for half of the victims.' },
  { name: 'LGBTQ Issues', image: 'lgbtq-issues.jpg', desc: 'That all individuals deserve to live openly without fear of discrimination, enjoying equal opportunities for freedom of expression and association, is at the center of the LGBTQ movement for civil rights.' },
  { name: 'Refugees', image: 'refugees.jpg', desc: 'The number of refugees has exploded and the crisis is only getting worse. Across the globe, nearly 50 million children have fled their homes. More than half these children are escaping violence and war and today, one out of every 200 children worldwide is a refugee.' }
];

const testimonials = [
  { name: 'Hien Dang', image: 'hien-dang.jpg' },
  { name: 'Bryan Brophy', image: 'bryan-brophy.jpg' },
  { name: 'Michael Park', image: 'michael-park.jpg' }
];

class Home extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleOnClick() {
    this.props.router.push('/organizations');
  }

  render() {
    const styles = {
      buttonRow: {
        margin: '40px 0 20px 0'
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
            <Button block bsSize="large" bsStyle="primary" onClick={this.handleOnClick.bind(this)} style={{ height: '80px', fontSize: '25px' }}>
              Browse all volunteer opportunities
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12}>
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Or search by the causes you are most passionate about</h3>
          </Col>
        </Row>
        <Row>
          {causes.map((cause, index) => {
            return <Cause cause={cause} key={index} />;
          })}
        </Row>
        <Row style={{ margin: '40px 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '40px' }}>Here's what other developers are saying:</h2>
          {testimonials.map((testimonial, index) => {
            return <Testimonial key={index} testimonial={testimonial}/>
          })}
        </Row>
      </Grid>
    </div>;
  }
}

export default withRouter(Home);
