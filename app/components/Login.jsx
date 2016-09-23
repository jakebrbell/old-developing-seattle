import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import { Link, withRouter } from 'react-router';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';

const Login = ({ handleSubmit, dispatch, router }) => {
  const handleLoginFormSubmit = (formFields) => {
    dispatch(loginUser(formFields));
    router.push('/');
  };

  const styles = {
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
      <Col xs={12} sm={6} smOffset={3} style={{ marginTop: '80px' }}>
        <Well bsSize="large">
          <h1 style={{ textAlign: 'center', margin: '10px 0 30px' }}>Login</h1>
          <p style={{ textAlign: 'center', marginBottom: '25px' }}>Not registered yet? {' '}
            <Link to={'/register'}>Register here.</Link>
          </p>
          <Form
            horizontal
            onSubmit={handleSubmit(handleLoginFormSubmit)}
          >
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <Field
                  component="input"
                  name="email"
                  placeholder="Email"
                  style={styles.field}
                  type="email"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <Field
                  component="input"
                  name="password"
                  placeholder="Password"
                  style={styles.field}
                  type="password"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" bsStyle="primary" style={{ float: 'right', width: '50%', marginTop: '20px' }}>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Well>
      </Col>
    </Row>
  </Grid>;
};

export default withRouter(reduxForm({ form: 'login' })(Login));
