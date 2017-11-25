import React from 'react';
import Code from '../components/Code';
import Yoga from '../static/images/yoga.png';
import Landing from '../static/images/landing.png';

const Slide19 = () => (
  <section
    className="flex mx0 l0 full-width"
    data-bespoke-backdrop="middle-earth-muted"
  >
    <h2 className="mb2">Some contributions</h2>
    <div className="flex items-start">
      <div className="bullet mt1 mx2" style={{ width: 300 }}>
        <img src={Yoga} height="170px" />
        <h3 className="mb1">Yoga</h3>
        <p>Cross-platform flexbox engine</p>
      </div>
      <div className="bullet mt1 mx2" style={{ width: 300 }}>
        <Code
          language="html"
          style={{ height: 170 }}
          className="m0 p0 fs-23 flex items-center justify-center"
        >
          {`
            <View>
              <Text />
              <Image />
              <Link />
            </View>
          `}
        </Code>
        <h3 className="mb1">React Primitives</h3>
        <p>Primitive React Interfaces Across Targets</p>
      </div>
      <div className="bullet mt1 mx2" style={{ width: 300 }}>
        <img src={Landing} height="170px" />
        <h3 className="mb1">Landing page</h3>
        <p>Documentation, REPL</p>
        <a
          href="https://twitter.com/Marce_Brum"
          target="_blank"
        >
          by @Marce_Brum
        </a>
      </div>
    </div>
  </section>
);

export default Slide19;
