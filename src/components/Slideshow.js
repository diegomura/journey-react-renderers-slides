import React from 'react';
import classNames from 'classnames';

const Slideshow = ({ active, size, children }) => (
  <div className="relative" style={{ width: size, height: size }}>
    {React.Children.toArray(children).map((child, i) => (
      React.cloneElement(child, {
        key: i,
        className: classNames('slideshow fit absolute t0 l0',{
          'slideshow-active': active === i
        }),
      })
    ))}
  </div>
);

Slideshow.defaultProps = {
  active: 0,
};

export default Slideshow;
