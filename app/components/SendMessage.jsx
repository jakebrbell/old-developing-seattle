import React from 'react';
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import cookie from 'react-cookie';
import axios from 'axios';

const SendMessage = ({ orgName, orgEmail, handleSubmit, proposalName }) => {
  const user = JSON.parse(cookie.load('user').substr(2));

  const handleOnClick = (formField) => {
    const emailMessage = {
      to: orgEmail,
      from: user.email,
      subject: `You've received a message from ${user.firstName} ${user.lastName}`,
      text: `Hi there! ${user.firstName} ${user.lastName} just sent the following message regarding ${orgName}'s proposal ${proposalName}: ${formField.message}`
    };

    axios.post('/api/messages', emailMessage)
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const styles = {
    field: {
      width: '100%',
      borderRadius: '4px',
      padding: '6px 12px',
      border: '1px solid #CCC',
      display: 'block',
      fontSize: '14px',
      color: '#555'
    }
  };

  return <Col xs={12}>
    <div style={{ margin: '40px 0' }}>
      <Field
        component="textarea"
        name="message"
        placeholder="Type message here"
        type="text"
        style={styles.field}
      />
    </div>
    <Button bsStyle="primary" style={{ float: 'right' }} onClick={handleSubmit(handleOnClick)}>Send Message to {orgName}</Button>
  </Col>;
};

export default reduxForm({ form: 'message' })(SendMessage);
