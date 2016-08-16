'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Link as RRLink, IndexLink as RRIndexLink } from 'react-router';

const Link = Radium(RRLink);
const IndexLink = Radium(RRIndexLink);

const IndexLinkBug = ({ children }) =>
  <div>
    <nav>
      <ul style={styles.list}>
        <li style={styles.item}>
          <IndexLink style={styles.link} activeStyle={styles.active} to="/">
            Hover Bug
          </IndexLink>
        </li>
        <li style={styles.item}>
          <Link style={styles.link} activeStyle={styles.active} to="/route1">
            Route 1
          </Link>
        </li>
        <li style={styles.item}>
          <Link style={styles.link} activeStyle={styles.active} to="/route2">
            Route 2
          </Link>
        </li>
        <li style={styles.item}>
          <Link style={styles.link} activeStyle={styles.active} to="/route3">
            Route 3
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>

IndexLinkBug.propTypes = {
  children: PropTypes.object.isRequired,
};

const styles = {
  list: {
    margin: 0,
    padding: 0,
  },
  item: {
    display: 'inline-block',
    listStyleType: 'none',
  },
  link: {
    backgroundColor: '#0ff',
    color: '#fff',
    display: 'block',
    margin: '0 10px',
    padding: '10px 20px',
    textDecoration: 'none',
    transition: 'all 0.5s',
    ':hover': {
      backgroundColor: '#f0f',
    },
  },
  active: {
    backgroundColor: '#f93',
  },
};

export default new Radium(IndexLinkBug);
