import React from 'react'
import ReactDOM from 'react-dom'

import './tests'
import '../views/index.pug'
import '../assets/index.scss'
import Game from './containers/root'

if (module.hot) {
  module.hot.accept('./tests', () => {
    console.log('OK');
  })
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    ReactDOM.render(
      <Game/>,
      document.getElementById('root')
    );
  });
}
