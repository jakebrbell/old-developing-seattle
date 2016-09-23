import { Button, Col, Grid, Label, Image, Row, Well } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import React, { PropTypes } from 'react';

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
          return <Proposal
            key={index}
            proposal={proposal}
            orgId={org.id}
            orgName={org.name}
            orgEmail={org.email}
            proposalId={index}
          />
        })}
      </Col>
    </Row>
  </Grid>;
};

OrgProfileFull.propTypes = {
  org: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    causes: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    desc: PropTypes.string,
    email: PropTypes.string,
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    proposals: PropTypes.array,
    updatedAt: PropTypes.string
  }).isRequired
};

export default OrgProfileFull;
