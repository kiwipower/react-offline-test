import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './css/index.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(React.createElement(App), document.getElementById('reactMountPoint'));
});
