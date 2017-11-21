import React from 'react';
import Ribbon from '../components/Ribbon';
import ReactConf from '../static/images/reactconf.jpg';
import ReactConf2 from '../static/images/reactconf2.jpg';

const Slide16 = () => (
  <section data-bespoke-backdrop="middle-earth-muted">
    <Ribbon className="fixed aniron fs-20 lh-26" style={{ top: 0, left: 20 }}>
      13 March, 2017
    </Ribbon>
    <div className="relative" style={{ width: '940px', height: '528px' }}>
      <img className="fit t0 l0 absolute bullet" src={ReactConf} />
      <img className="fit t0 l0 absolute bullet" src={ReactConf2} />
    </div>
    <p>* Lin Clark - A Cartoon Intro to Fiber - React Conf 2017</p>
  </section>
);

export default Slide16;
