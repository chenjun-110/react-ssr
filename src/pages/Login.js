import React, { Component } from 'react';
import styles from './Login.css';
class Login extends Component {
  componentWillMount () {
    console.log('componentWillMount Login')
  }
  render() {
    return (
      <div className={styles.color}>
       Login<div className="page">page</div>
      </div>
    );
  }
}

export default Login;
