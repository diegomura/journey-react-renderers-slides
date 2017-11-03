import fs from 'fs';
import path from 'path';
import React from 'react';
import { Image } from '@react-pdf/core';

const logo = fs.readFileSync(path.join(__dirname, '../static/images/logo.jpg'));

const Logo = () => (
  <Image src={{ data: logo, format: 'jpg' }} />
);

export default Logo;
