import React from 'react';
import Code from '../components/Code';

class Slide05 extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      console.log(
        '%c⛔️Stop%c\nThis is dangerous',
        'color: red; font-size: 22px; font-weight: bold;',
        'color: black; font-weight: bold;',
      );
    }

    if (this.props.active && !nextProps.active) {
      console.clear();
    }
  }

  render() {
    return (
      <section data-bespoke-backdrop="middle-earth-muted">
        <h2 className="mb1">How it works</h2>
        <Code language="js">
          {`console.log(
            '%c⛔️Stop%c\\nThis is dangerous',
            'color: red; font-size: 22px; font-weight: bold;',
            'color: black; font-weight: bold;'
          );`}
        </Code>
      </section>
    );
  }
}

export default Slide05;
