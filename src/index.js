import React from 'react';
// import ReactDOM from 'react-dom';
import { render as renderSnapshot } from 'react-snapshot';

import App from './App';

const render = Component => {
    // return ReactDOM.render(
    return renderSnapshot(
      <Component />,
      document.getElementById('root')
    );
  };

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    })
}
