import { Col } from 'react-bootstrap';
import Radium from 'radium';
import React from 'react';

class Cause extends React.Component {
  render() {
    const cause = this.props.cause;

    const styles = {
      col: {
        padding: 0
      },
      description: {
        padding: '0 30px'
      },
      name: {
        padding: '10px',
        margin: 0,
        height: '50px',
        textAlign: 'center'
      },
      overlay: {
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
      },
      overlayContainer: {
        height: '250px',
        cursor: 'pointer',
        position: 'relative'
      }
    };

    return <Col md={3} sm={6} style={styles.col} xs={12}>
      <div style={Object.assign({
        background: `url("images/${cause.image}") center center / cover no-repeat`
      }, styles.overlayContainer)}>
        <div style={styles.overlay}>
          <h3 style={styles.name}>
            {cause.name}
          </h3>
          <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
    </Col>;
  }
}

export default Radium(Cause);
