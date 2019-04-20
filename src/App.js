import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

// import './App.css';
import styles from './App.css';
class App extends Component {
  componentWillMount () {
    console.log('app')
    if (this.props.staticContext) { // 只有服务端渲染时候有this.props.staticContext以及_getCss()
    //  this.props.staticContext.css.push(styles._getCss())
     console.log('this.props.staticContext', this.props.staticContext)
    }
  }
  render() {
    return (
        <div className={styles.App}>
          <header className={styles["App-header"]}>
            <img src={logo} className={styles["App-logo"]} alt="logo" />
            <p className="123">
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to={`/Login`}>Login</Link>
          </header>
        </div>
    );
  }
}

export default App;
