import React from 'react';
import Tree2 from '../static/images/tree2.png';
import ReactPDF from '../static/images/react-pdf-logo.png';
import Document from '../static/images/pdf-document.png';

const Slide16 = () => (
  <section
    className="flex flex-row"
    data-bespoke-backdrop="middle-earth-muted"
  >
    <div className="flex full-height items-center" style={{ flex: 1 }}>
      <img src={Tree2} className="max-width max-height" />
    </div>
    <div className="flex full-height items-center">
      <span className="mr1 fs-65">↠</span>
      <img src={ReactPDF} className="fit" style={{ width: 200 }} />
      <span className="mx1 fs-65">↠</span>
      <img src={Document} className="fit" style={{ width: 200 }} />
    </div>
  </section>
);

export default Slide16;
