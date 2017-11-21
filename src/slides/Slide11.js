import React from 'react';
import Ribbon from '../components/Ribbon';
import Meetup from '../static/images/meetup.png';
import Talk from '../static/images/think-react.png';

const Slide11 = () => (
  <section data-bespoke-backdrop="middle-earth-muted">
    <Ribbon className="fixed aniron fs-19 lh-26" style={{ top: 0, left: 20 }}>
      20 October, 2016
    </Ribbon>
    <img src={Meetup} className="unique-bullet" style={{ width: '35vw' }} />
    <img src={Talk} className="unique-bullet" style={{ width: '50vw' }} />
  </section>
);

export default Slide11;
