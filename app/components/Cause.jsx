import { Col } from 'react-bootstrap';
import Radium from 'radium';
import React from 'react';

class Cause extends React.Component {
  render() {
    const styles = {
      overlayContainer: {
        height: '250px',
        cursor: 'pointer',
        position: 'relative'
      },
      h3: {
        padding: '10px',
        margin: 0,
        height: '50px',
        textAlign: 'center'
      }
    };

    return <Col
      md={3}
      sm={6}
      xs={12}
      style={{ padding: 0 }}
    >
      <div style={Object.assign({
        background: `url("images/${this.props.cause.image}") center center / cover no-repeat`
      }, styles.overlayContainer)}>
        <div style={{
          position: 'absolute',
          top: '80%',
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(34, 34, 34, 0.8)',
          color: '#9D9D9D',
          overflow: 'hidden',
          textAlign: 'left',
          transition: 'all 1s',

          ':hover': {
            top: 0,
            color: '#fff'
          }
        }}>
          <h3 style={styles.h3}>
            {this.props.cause.name}
          </h3>
          <p style={{ padding: '0 30px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
    </Col>;
  }
}

export default Radium(Cause);
