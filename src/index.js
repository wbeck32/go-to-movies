import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PropTypes from 'prop-types';

import registerServiceWorker from './registerServiceWorker';

App.propTypes = {
  page: PropTypes.number,
  loading: PropTypes.bool,
  category: PropTypes.string,
  value: PropTypes.string
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
registerServiceWorker();
