import React from 'react';
import ReactPDF from '@react-pdf/node';
import { Page, Document } from '@react-pdf/core';

const doc = (
  <Document
    title="JSDay Demo"
    author="diegomura"
  >
    <Page size="A4" />
  </Document>
);

ReactPDF.render(doc, `${__dirname}/output.pdf`);
