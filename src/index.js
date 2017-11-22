import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import hash from 'bespoke-hash';
import touch from 'bespoke-touch';
import progress from 'bespoke-progress';
import bullets from 'bespoke-bullets';
import backdrop from 'bespoke-backdrop';
import fullscreen from 'bespoke-fullscreen';
import prism from 'bespoke-prism';
import App from './components/App';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById('root');
const BULLET_ELEMENTS = 'ul.bullet li, .bullet, .unique-bullet, .grow-bullet';

const plugins = [
  nebula(),
  classes(),
  keys(),
  hash(),
  touch(),
  progress(),
  backdrop(),
  bullets(BULLET_ELEMENTS),
  fullscreen(),
  prism(),
];

ReactDOM.render(
  <App mountElement={MOUNT_ELEMENT} plugins={plugins} />,
  MOUNT_ELEMENT,
);
