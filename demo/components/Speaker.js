import React from 'react';
import { View, Link, Text, Image, StyleSheet } from '@react-pdf/core';
import Flag from './Flag';

const Speaker = ({ name, twitter, country }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      src={`https://twitter.com/${twitter}/profile_image?size=original`}
    />
    <View style={styles.info}>
      <Text style={styles.text}>
        {name}
      </Text>
      <Link
        style={styles.link}
        src={`https://twitter.com/${twitter}`}
      >
        {`@${twitter}`}
    </Link>
    <Flag
      country={country}
      style={styles.flag}
    />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: '#101931',
  },
  flag: {
    width: 15,
  },
  image: {
    width: 90,
    height: 90,
  },
  info: {
    height: 65,
    justifyContent: 'center'
  },
  text: {
    marginVertical: 3,
    fontFamily: 'Roboto Mono',
    color: 'white',
    fontSize: 11
  },
  link: {
    marginBottom: 2,
    fontFamily: 'Roboto Mono',
    color: 'white',
    fontSize: 10
  }
});

export default Speaker;
