import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// We are only using the user-astronaut icon
library.add(faUserAstronaut)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
