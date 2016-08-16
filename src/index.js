'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './components/Routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
