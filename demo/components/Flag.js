import fs from 'fs';
import path from 'path';
import React from 'react';
import { Image } from '@react-pdf/core';

const Flag = ({ country, style }) => {
  const logo = fs.readFileSync(path.join(__dirname, `../static/images/${country}.png`));

  return (
    <Image src={{ data: logo, format: 'png' }} style={style} />
  );
};

export default Flag;
