import { Button, Col, Grid, Label, Image, Row, Well } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import React from 'react';

// const org = {
//   name: 'Company Name',
//   address: '1260 Republican Street, Seattle, WA 98109',
//   logo: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
//   causes: ['Animal Welfare', 'Environment'],
//   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   proposals: [{
//     name: 'We need a new website',
//     description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
//     skills: ['Designer', 'Web Developer']
//   }, {
//     name: 'We need a new website',
//     description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
//     skills: ['Designer', 'Web Developer']
//   }]
// }

const OrgProfileFull = ({ org }) => {
  const styles = {
    label: {
      backgroundColor: '#8ed4cc',
      boxShadow: '3px 3px 7px -1px rgba(0,0,0,0.52)'
    },
    labelWrapper: {
      display: 'inline',
      marginRight: '10px'
    },
    link: {
      color: 'black'
    },
    logo: {
      display: 'block',
      height: '200px',
      margin: '0 auto'
    },
    row: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      margin: '0 100px 30px',
      padding: '30px'
    }
  };

  return <Grid style={{ marginTop: '100px' }}>
    <Row style={styles.row}>
      <Col xs={12} sm={3}>
        <Image
          circle
          src={`/images/${org.logoUrl}`}
          style={styles.logo}
        />
      </Col>
      <Col xs={12} sm={9}>
        <h2>{org.name}</h2>
        <p>{org.address}</p>
        {org.causes.map((cause, index) => {
          return <h3 key={index} style={styles.labelWrapper}>
            <Label style={styles.label}>{cause}</Label>
          </h3>;
        })}
        <p style={{ marginTop: '20px' }}>{org.desc}</p>
      </Col>
      <Col xs={12}>
        {org.proposals.map((proposal, index) => {
          return <Proposal key={index} proposal={proposal} />
        })}
      </Col>
    </Row>
  </Grid>;
};

export default OrgProfileFull;
