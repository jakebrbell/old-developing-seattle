import { Col, Image, Label, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import React from 'react';

class OrgProfileShort extends React.Component {
  render() {
    const { org } = this.props;

    const styles = {
      label: {
        backgroundColor: 'blue'
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
        marginBottom: '30px',
        padding: '30px'
      }
    };

    return <Row style={styles.row}>
      <Col xs={12}>
        <Link to={'/'} style={styles.link}>
          <Col xs={12} sm={3}>
            <Image
              circle
              src={org.logo}
              style={styles.logo}
            />
          </Col>
          <Col xs={12} sm={9}>
            <h2>{org.name}</h2>
            <p>{org.address}</p>
            <p>{org.description}</p>
            {org.causes.map((cause, index) => {
              return <h3 key={index} style={styles.labelWrapper}>
                <Label style={styles.label}>{cause}</Label>
              </h3>;
            })}
          </Col>
        </Link>
      </Col>
    </Row>;
  }
}

export default OrgProfileShort;
