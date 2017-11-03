import React from 'react';
import { View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  section: {
    paddingVertical: 15,
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
});

const Section = ({ children }) => (
  <View style={styles.section}>
    {children}
  </View>
);

export default Section;
