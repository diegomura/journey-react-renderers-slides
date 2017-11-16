import React from 'react';
import Ribbon from '../components/Ribbon';
import ReactConf from '../static/images/reactconf.jpg';
import ReactConf2 from '../static/images/reactconf2.jpg';

const Slide17 = () => (
  <section data-bespoke-backdrop="middle-earth-muted">
    <Ribbon
      className="fixed aniron fs-20 lh-26"
      style={{ top: 0, left: 20 }}
    >
      13 March, 2017
    </Ribbon>
    <img className="fit absolute bullet" src={ReactConf} />
    <img className="fit absolute bullet" src={ReactConf2} />
    <p>* Lin Clark - A Cartoon Intro to Fiber - React Conf 2017</p>
  </section>
);

export default Slide17;
