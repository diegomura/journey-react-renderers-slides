import React from 'react';
import { View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  aside: {
    width: '300px',
  },
});

const Aside = ({ children }) => (
  <View style={styles.aside}>
    {children}
  </View>
);

export default Aside;
