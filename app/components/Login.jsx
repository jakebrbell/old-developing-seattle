import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import React from 'react';

class Login extends React.Component {
  render() {
    return <Grid style={{ marginTop: '100px' }}>
      <Row>
        <Col xs={12} sm={6} smOffset={3} style={{ marginTop: '80px' }}>
          <Well>
            <h1 style={{ textAlign: 'center', margin: '10px 0 30px 0' }}>Login</h1>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <p style={{ textAlign: 'center' }}>Not registered yet? Register here.</p>
          </Well>
        </Col>
      </Row>
    </Grid>;
  }
}

export default Login;
