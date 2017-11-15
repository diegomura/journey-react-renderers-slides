import React from 'react';
import Ribbon from '../components/Ribbon';
import Meetup from '../static/images/meetup.png';

const Slide09 = () => (
  <section data-bespoke-backdrop="middle-earth-muted">
    <Ribbon
      className="fixed aniron fs-19 lh-26"
      style={{ top: 0, left: 20 }}
    >
      20th October, 2016
    </Ribbon>
    <img src={Meetup} style={{ width: '40vw' }} />
  </section>
);

export default Slide09;
