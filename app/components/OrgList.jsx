import { Col, ControlLabel, FormControl, FormGroup, Grid, Image, Label, Row }
  from 'react-bootstrap';
import { Link } from 'react-router';
import React from 'react';

class OrgList extends React.Component {
  render() {
    return <main>
      <Grid style={{ marginTop: '100px' }}>
        <Row>
          <Col xs={12} sm={3}>
            <aside style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px', margin: '0 10px', position: 'fixed', width: '19%'}}>
              <h3 style={{ marginTop: 0 }}>Filter by</h3>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Cause</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="animal-welfare">Animal Welfare</option>
                  <option value="education">Education</option>
                  <option value="environment">Environment</option>
                  <option value="gender-equality">Gender Equality</option>
                  <option value="homelessness">Homelessness</option>
                  <option value="human-trafficking">Human Trafficking</option>
                  <option value="lgbtq-issues">LGBTQ Issues</option>
                  <option value="refugees">Refugees</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Skills</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Select</option>
                  <option value="web-developer">Web Developer</option>
                </FormControl>
              </FormGroup>
            </aside>
          </Col>
          <Col xs={12} sm={9}>
            <Row style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px', marginBottom: '30px' }}>
              <Col xs={12}>
                <Link to={'/'} style={{ color: 'black' }}>
                  <Col xs={12} sm={3}>
                    <Image
                      circle
                      src="https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg"
                      style={{ height: '200px', display: 'block', margin: '0 auto' }}
                    />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h2>Company Name</h2>
                    <p>1260 Republican Street, Seattle, WA 98109</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 style={{ display: 'inline', marginRight: '10px' }}>
                      <Label style={{ backgroundColor: 'blue' }}>Environment</Label>
                    </h3>
                    <h3 style={{ display: 'inline', marginRight: '10px' }}>
                      <Label style={{ backgroundColor: 'blue' }}>Animal Welfare</Label>
                    </h3>
                  </Col>
                </Link>
              </Col>
            </Row>
            <Row style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px', marginBottom: '30px' }}>
              <Col xs={12}>
                <Link to={'/'} style={{ color: 'black' }}>
                  <Col xs={12} sm={3}>
                    <Image
                      circle
                      src="http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg"
                      style={{ height: '200px', display: 'block', margin: '0 auto' }}
                    />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h2>Company Name</h2>
                    <p>1260 Republican Street, Seattle, WA 98109</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 style={{ display: 'inline', marginRight: '10px' }}>
                      <Label style={{ backgroundColor: 'blue' }}>Human Trafficking</Label>
                    </h3>
                  </Col>
                </Link>
              </Col>
            </Row>
            <Row style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px', marginBottom: '30px' }}>
              <Col xs={12}>
                <Link to={'/'} style={{ color: 'black' }}>
                  <Col xs={12} sm={3}>
                    <Image
                      circle
                      src="https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg"
                      style={{ height: '200px', display: 'block', margin: '0 auto' }}
                    />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h2>Company Name</h2>
                    <p>1260 Republican Street, Seattle, WA 98109</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 style={{ display: 'inline', marginRight: '10px' }}>
                      <Label style={{ backgroundColor: 'blue' }}>Education</Label>
                    </h3>
                  </Col>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </main>;
  }
}

export default OrgList;
