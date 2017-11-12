import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import progress from 'bespoke-progress';
import bullets from 'bespoke-bullets';
import backdrop from 'bespoke-backdrop';
import fullscreen from 'bespoke-fullscreen';
import prism from 'bespoke-prism';
import App from './components/App';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById('root');

const plugins = [
  nebula(),
  classes(),
  keys(),
  touch(),
  progress(),
  backdrop(),
  bullets('li, .bullet'),
  fullscreen(),
  prism(),
];

ReactDOM.render(
  <App
    mountElement={MOUNT_ELEMENT}
    plugins={plugins}
  />,
  MOUNT_ELEMENT
);
