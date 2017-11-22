import React from 'react';
import Email from '../static/images/email.png';
import OpenCollective from '../static/images/opencollective.png';

const Slide19 = () => (
  <section className="flex" data-bespoke-backdrop="middle-earth-muted">
    <h2 className="mb1">Opencollective</h2>
    <div className="flex items-center" style={{ flex: 1 }}>
      <img src={Email} className="unique-bullet" style={{ width: '60vw' }} />
      <img
        src={OpenCollective}
        className="unique-bullet"
        style={{ width: '40vw' }}
      />
    </div>
  </section>
);

export default Slide19;
