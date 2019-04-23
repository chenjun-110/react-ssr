import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import { createStore, applyMiddleware, compose } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import './App.css';
import styles from './App.css';
import { store, StoreContext } from './router'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {
    console.log('app', this.props)
    if (this.props.staticContext) { // 只有服务端渲染时router才会挂载staticContext
     console.log('this.props.staticContext', this.props.staticContext)
    }
  }
  componentDidMount() {
    console.log('context', this.context, store)
  }
  render() {
    return (
      // <StoreContext.Consumer>{(a)=>
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

function mapStateToProps(state) {      // 将state映射到组件的props中
  return {
    value: state.count || 1
  }
}
function mapDispatchToProps(dispatch, ownProps) {// 将dispatch映射到组件的props中
  return {
      onIncreaseClick: () => dispatch({ type: 'increase' })
  }
}
App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
