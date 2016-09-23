import { Button, Col, Label, Row } from 'react-bootstrap';
import React from 'react';
import SendMessage from 'components/SendMessage';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

const Proposal = ({
  proposalId,
  proposal,
  toggleMessage,
  message,
  orgId,
  orgName,
  router,
  orgEmail
}) => {
  const handleOnClick = () => {
    toggleMessage({ orgId, proposalId });
  };

  const handleOnClickCancel = () => {
    toggleMessage({});
  };

  const handleRedirect = () => {
    router.push('/login');
  };

  const styles = {
    button: {
      marginTop: '50%',
      float: 'right'
    },
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
      {cookie.load('loggedIn') ?
        (
          (message.orgId === orgId && message.proposalId === proposalId) ?
          <Button bsStyle="danger" onClick={handleOnClickCancel} style={styles.button}>Cancel message</Button> :
          <Button bsStyle="primary" onClick={handleOnClick} style={styles.button}>Send a message</Button>
        ) :
        <Button bsStyle="primary" onClick={handleRedirect} style={styles.button}>Send a message</Button>
      }
    </Col>
    {(message.orgId === orgId && message.proposalId === proposalId) ?
      <SendMessage orgName={orgName} orgEmail={orgEmail} proposalName={proposal.name} /> : null
    }
  </Row>;
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

export default withRouter(connect(
  mapStateToProps,
  actions
)(Proposal));
