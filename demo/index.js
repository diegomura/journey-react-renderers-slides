import React from 'react';
import ReactPDF from '@react-pdf/node';
import { Document, Page , View, Text, Font, StyleSheet } from '@react-pdf/core';
import { shuffle } from 'lodash';
import Aside from './components/Aside';
import Section from './components/Section';
import Logo from './components/Logo';
import Speaker from './components/Speaker';
import speakers from './speakers.json';

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#0e0e0e',
  },
});

Font.register(
  `${__dirname}/static/fonts/roboto_mono.ttf`,
  { family: 'Roboto Mono' },
);

const doc = (
  <Document
    title="JSDay Demo"
    author="diegomura"
  >
    <Page
      size="A4"
      style={styles.page}
      orientation="horizontal"
    >
      <Aside>
        <Logo />
      </Aside>

      <Section>
        {shuffle(speakers).map(speaker => (
          <Speaker key={speaker.name} {...speaker} />
        ))}
      </Section>
    </Page>
  </Document>
);

ReactPDF.render(doc, `${__dirname}/output.pdf`);
