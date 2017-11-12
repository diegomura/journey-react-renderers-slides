import React from 'react';
import Log from 'react-log';
import ReactLog from '../static/images/react-log.png';

const Slide03 = () => (
  <section data-bespoke-backdrop="middle-earth-emphatic">
    <img className="fit" src={ReactLog} />

    <Log>
      <h1
        style={{
          color: 'black',
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: 'normal',
          fontSize: '50px'
        }}>
        React
        <span
          style={{
            color: 'white',
            fontFamily: 'Arial, Helvetica, sans-serif',
            background: 'linear-gradient(to bottom right, #13493b, #016a26)',
            fontSize: '45px',
            fontWeight: 'bold',
            marginLeft: '10px',
            padding: '5px'
          }}>
          log
        </span>
      </h1>
    </Log>
  </section>
);

export default Slide03;
