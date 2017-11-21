import React from 'react';
import classNames from 'classnames';

const Ribbon = ({ style, className, children }) => (
  <div className={classNames('ribbon bg-red', className)} style={style}>
    <span>{children}</span>
  </div>
);

export default Ribbon;
