'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';

const Spinner = ({ style }) =>
  <i style={[styles.spinner, style]} className="fa fa-spinner" />

Spinner.propTypes = {
  style: PropTypes.object,
};

const spinnerKeyframe = Radium.keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' },
});

const styles = {
  spinner: {
    animation: 'x 2s linear infinite',
    animationName: spinnerKeyframe,
    color: '#00f',
  }
};

export default new Radium(Spinner);
