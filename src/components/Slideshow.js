import React from 'react';
import classNames from 'classnames';

const Slideshow = ({ active, width, height, className, children }) => (
  <div
    style={{ width: width, height: height }}
    className={classNames('relative', className)}
  >
    {React.Children.toArray(children).map((child, i) =>
      React.cloneElement(child, {
        key: i,
        className: classNames('slideshow fit absolute t0 l0 full-width', {
          'slideshow-active': active === i,
        }),
      }),
    )}
  </div>
);

Slideshow.defaultProps = {
  active: 0,
};

export default Slideshow;
