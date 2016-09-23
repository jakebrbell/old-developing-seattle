import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import { createNewUser } from '../actions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Checkbox from 'components/Checkbox';
import { withRouter } from 'react-router';

const causesFirstColumn = [
  { name: 'animalWelfare', value: 'Animal Welfare'},
  { name: 'education', value: 'Education' },
  { name: 'environment', value: 'Environment'},
  { name: 'genderEquality', value: 'Gender Equality'}
];

const causesSecondColumn = [
  { name: 'homelessness', value: 'Homelessness' },
  { name: 'humanTrafficking', value: 'Human Trafficking' },
  { name: 'lgbtqIssues', value: 'LGBTQ Issues' },
  { name: 'refugees', value: 'Refugees' }
];

const skillsFirstColumn = [
  { name: 'html', value: 'HTML' },
  { name: 'css', value: 'CSS' },
  { name: 'javascript', value: 'JavaScript' },
  { name: 'postgresql', value: 'PostgreSQL' }
];

const skillsSecondColumn = [
  { name: 'nodejs', value: 'Node.js' },
  { name: 'express', value: 'Express.js' },
  { name: 'angular', value: 'Angular.js' },
  { name: 'react', value: 'React' }
];

const Register = ({ handleSubmit, dispatch, router }) => {
  const handleRegisterFormSubmit = (formFields) => {
    dispatch(createNewUser(formFields));
    router.push('/login');
  };

  const styles = {
    checkbox: {
      margin: '4px 5px 0 0'
    },
    checkboxLabel: {
      minHeight: '20px',
      marginBottom: '0',
      fontWeight: '400',
      cursor: 'pointer',
      display: 'inline-block',
      maxWidth: '100%',
      paddingTop: '7px'
    },
    field: {
      width: '100%',
      borderRadius: '4px',
      padding: '6px 12px',
      border: '1px solid #CCC',
      display: 'block',
      fontSize: '14px',
      color: '#555'
    }
  };

  return <Grid style={{ marginTop: '100px' }}>
    <Row>
      <Col xs={12} sm={6} smOffset={3} style={{ marginTop: '20px' }}>
        <Well bsSize="large">
          <h1 style={{ textAlign: 'center', margin: '10px 0 30px' }}>Register</h1>
          <Form
            horizontal
            onSubmit={handleSubmit(handleRegisterFormSubmit)}
          >
            <FormGroup controlId="firstName">
              <Col componentClass={ControlLabel} sm={3}>
                First Name
              </Col>
              <Col sm={9}>
                <Field
                  component="input"
                  name="firstName"
                  placeholder="First Name"
                  style={styles.field}
                  type="text"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="lastName">
              <Col componentClass={ControlLabel} sm={3}>
                Last Name
              </Col>
              <Col sm={9}>
                <Field
                  component="input"
                  name="lastName"
                  placeholder="Last Name"
                  style={styles.field}
                  type="text"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="email">
              <Col componentClass={ControlLabel} sm={3}>
                Email
              </Col>
              <Col sm={9}>
                <Field
                  component="input"
                  name="email"
                  placeholder="Email"
                  style={styles.field}
                  type="email"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={9}>
                <Field
                  component="input"
                  name="password"
                  placeholder="Password"
                  style={styles.field}
                  type="password"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="title">
              <Col componentClass={ControlLabel} sm={3}>
                Title
              </Col>
              <Col sm={9}>
                <Field
                  component="input"
                  name="title"
                  placeholder="Title"
                  style={styles.field}
                  type="text"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Causes
              </Col>
              <Col sm={4}>
                {causesFirstColumn.map((cause, i) => {
                  return <Checkbox key={i} styles={styles} contents={cause} />
                })}
              </Col>
              <Col sm={5}>
                {causesSecondColumn.map((cause, i) => {
                  return <Checkbox key={i} styles={styles} contents={cause} />
                })}
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Skills
              </Col>
              <Col sm={4}>
                {skillsFirstColumn.map((skill, i) => {
                  return <Checkbox key={i} styles={styles} contents={skill} />
                })}
              </Col>
              <Col sm={5}>
                {skillsSecondColumn.map((skill, i) => {
                  return <Checkbox key={i} styles={styles} contents={skill} />
                })}
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={9}>
                <Button type="submit" bsStyle="primary" style={{ width: '50%', float: 'right', marginTop: '30px' }}>
                  Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Well>
      </Col>
    </Row>
  </Grid>;
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default withRouter(reduxForm({ form: 'register' })(Register));
