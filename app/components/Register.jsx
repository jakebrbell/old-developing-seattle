import { Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import React from 'react';

class Register extends React.Component {
  render() {
    return <Grid style={{ marginTop: '100px' }}>
      <Row>
        <Col xs={12} sm={6} smOffset={3} style={{ marginTop: '20px' }}>
          <Well bsSize="large">
            <h1 style={{ textAlign: 'center', margin: '10px 0 30px' }}>Register</h1>
            <Form horizontal>
              <FormGroup controlId="firstName">
                <Col componentClass={ControlLabel} sm={3}>
                  First Name
                </Col>
                <Col sm={9}>
                  <FormControl type="text" placeholder="First Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="lastName">
                <Col componentClass={ControlLabel} sm={3}>
                  Last Name
                </Col>
                <Col sm={9}>
                  <FormControl type="text" placeholder="Last Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={3}>
                  Email
                </Col>
                <Col sm={9}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="password">
                <Col componentClass={ControlLabel} sm={3}>
                  Password
                </Col>
                <Col sm={9}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup controlId="title">
                <Col componentClass={ControlLabel} sm={3}>
                  Title
                </Col>
                <Col sm={9}>
                  <FormControl type="text" placeholder="Title" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>
                  Causes
                </Col>
                <Col sm={4}>
                  <Checkbox>
                    Animal Welfare
                  </Checkbox>
                  <Checkbox>
                    Education
                  </Checkbox>
                  <Checkbox>
                    Environment
                  </Checkbox>
                  <Checkbox>
                    Gender Equality
                  </Checkbox>
                </Col>
                <Col sm={5}>
                  <Checkbox>
                    Homelessness
                  </Checkbox>
                  <Checkbox>
                    Human Trafficking
                  </Checkbox>
                  <Checkbox>
                    LGBTQ Issues
                  </Checkbox>
                  <Checkbox>
                    Refugees
                  </Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>
                  Skills
                </Col>
                <Col sm={4}>
                  <Checkbox>
                    Skill 1
                  </Checkbox>
                  <Checkbox>
                    Skill 2
                  </Checkbox>
                  <Checkbox>
                    Skill 3
                  </Checkbox>
                  <Checkbox>
                    Skill 4
                  </Checkbox>
                </Col>
                <Col sm={5}>
                  <Checkbox>
                    Skill 5
                  </Checkbox>
                  <Checkbox>
                    Skill 6
                  </Checkbox>
                  <Checkbox>
                    Skill 7
                  </Checkbox>
                  <Checkbox>
                    Skill 8
                  </Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={3} sm={9}>
                  <Button type="submit">
                    Register
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </Col>
      </Row>
    </Grid>;
  }
}

export default Register;
