import { Button, Col, Image, Label, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import React from 'react';

const OrgProfileShort = ({ org }) => {
  const styles = {
    label: {
      backgroundColor: '#8ED4CC',
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
      margin: '20px auto',
      background: '#fff'
    },
    row: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      marginBottom: '30px',
      padding: '30px'
    }
  };

  return <Row style={styles.row}>
    <Col xs={12}>
      <Link to={`/organizations/${org.id}`} style={styles.link}>
        <Col xs={12} sm={3} style={{ padding: 0 }}>
          <Image
            circle
            src={`/images/${org.logoUrl}`}
            style={styles.logo}
          />
          <Button block>View Full Profile</Button>
        </Col>
        <Col xs={12} sm={9} style={{ paddingLeft: 50 }}>
          <h2>{org.name}</h2>
          <p>{org.address}</p>
          <div style={{ marginBottom: 15 }}>
            {org.causes.map((cause, index) => {
              return <h3 key={index} style={styles.labelWrapper}>
                <Label style={styles.label}>{cause}</Label>
              </h3>;
            })}
          </div>
          <p>{org.desc}</p>
        </Col>
      </Link>
    </Col>
  </Row>;
}

export default OrgProfileShort;
