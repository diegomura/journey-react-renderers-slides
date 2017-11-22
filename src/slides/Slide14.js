import React from 'react';
import Tree2 from '../static/images/tree2.png';
import QuestionMark from '../static/images/question-mark.png';
import Document from '../static/images/pdf-document.png';

const Slide14 = () => (
  <section className="flex" data-bespoke-backdrop="middle-earth-muted">
    <h2 className="mb2">React Renderers</h2>
    <div className="flex flex-row justify-around full-width">
      <div>
        <h3 className="mb1">Official</h3>
        <ul>
          <li>react-dom</li>
          <li>react-native</li>
          <li>react-vr</li>
          <li>react-test</li>
          <li>react-art</li>
        </ul>
      </div>
      <div>
        <h3 className="mb1">Community driven</h3>
        <ul>
          <li>react-hardware</li>
          <li>react-blessed</li>
          <li>react-three</li>
          <li>redocx</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Slide14;
