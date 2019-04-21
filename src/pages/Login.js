import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class Login extends Component {
  componentWillMount () {
    console.log('componentWillMount Login')
  }
  componentDidMount() {
    console.log('context', this.context, this.props)
  }
  render() {
    return (
      <div className={styles.color}>
       Login<div className="page">page</div>
       <Link to={`/`}>APP</Link>
      </div>
    );
  }
}



function mapStateToProps(state) {      // 将state映射到组件的props中
  return {
    value: state.count
  }
}
function mapDispatchToProps(dispatch, ownProps) {// 将dispatch映射到组件的props中
  return {
      onIncreaseClick: () => dispatch({ type: 'increase' })
  }
}
Login.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
// export default Login;
