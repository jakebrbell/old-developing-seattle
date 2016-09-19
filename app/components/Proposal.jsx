import { Button, Col, Label, Row } from 'react-bootstrap';
import React from 'react';

class Proposal extends React.Component {
  render() {
    const { proposal } = this.props;

    const styles = {
      label: {
        backgroundColor: '#ffc907',
        boxShadow: '3px 3px 7px -1px rgba(0,0,0,0.52)'
      },
      labelWrapper: {
        display: 'inline',
        marginRight: '10px'
      },
      row: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '3px 3px 7px -1px rgba(0,0,0,0.52)',
        margin: '40px 20px',
        padding: '30px'
      }
    };

    return <Row style={styles.row}>
      <Col xs={12} sm={9}>
        <h3 style={{ margin: 0 }}>{proposal.name}</h3>
        <p>{proposal.description}</p>
        {proposal.skills.map((skill, index) => {
          return <h4 key={index} style={styles.labelWrapper}>
            <Label style={styles.label}>{skill}</Label>
          </h4>;
        })}
      </Col>
      <Col xs={12} sm={3}>
        <Button>Send a message</Button>
      </Col>
    </Row>;
  }
}

export default Proposal;
