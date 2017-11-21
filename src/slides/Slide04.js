import React from 'react';
import Ribbon from '../components/Ribbon';
import Console1 from '../static/images/Console1.png';
import Console2 from '../static/images/Console2.png';

const Slide04 = () => (
  <section data-bespoke-backdrop="middle-earth-muted">
    <Ribbon className="fixed aniron fs-20 lh-26" style={{ top: 0, left: 20 }}>
      18 July, 2016
    </Ribbon>

    <img className="fit absolute bullet" src={Console1} />
    <img className="fit absolute bullet" src={Console2} />
  </section>
);

export default Slide04;
