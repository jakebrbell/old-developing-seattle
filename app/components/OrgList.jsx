import { Col, ControlLabel, FormControl, FormGroup, Grid, Image, Label, Row }
  from 'react-bootstrap';
import { Link } from 'react-router';
import OrgProfileShort from 'components/OrgProfileShort';
import React from 'react';

const orgs = [
  {
    name: 'Company Name',
    address: '1260 Republican Street, Seattle, WA 98109',
    logo: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
    causes: ['Animal Welfare', 'Environment'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    name: 'Company Name',
    address: '1260 Republican Street, Seattle, WA 98109',
    logo: 'http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg',
    causes: ['Human Trafficking'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    name: 'Company Name',
    address: '1260 Republican Street, Seattle, WA 98109',
    logo: 'https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg',
    causes: ['Education'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

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
            {orgs.map((org, index) => {
              return <OrgProfileShort key={index} org={org} />;
            })}
          </Col>
        </Row>
      </Grid>
    </main>;
  }
}

export default OrgList;
