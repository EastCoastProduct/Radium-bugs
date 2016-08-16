'use strict';

import React, { PropTypes } from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import HoverBug from './HoverBug';
import IndexLinkBug from './IndexLinkBug';
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={IndexLinkBug}>
      <IndexRoute component={HoverBug} />
      <Route path="/route1" component={Route1} />
      <Route path="/route2" component={Route2} />
      <Route path="/route3" component={Route3} />
    </Route>
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
