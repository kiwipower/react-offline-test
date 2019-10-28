import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedApp } from './app';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((<ConnectedApp />), document.getElementById('reactMountPoint'));
});
