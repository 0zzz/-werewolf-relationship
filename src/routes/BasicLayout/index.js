import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import HomePage from '../Home';
import styles from './BasicLayout.scss';

const { Content, Footer } = Layout;

const propTypes = {
};

const defaultProps = {
};
class BasicLayout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Route path="/" component={HomePage} />
      </div>
    );
  }
}

BasicLayout.propTypes = propTypes;
BasicLayout.defaultProps = defaultProps;
export default connect(
  state => ({ }),
  { },
)(BasicLayout);
