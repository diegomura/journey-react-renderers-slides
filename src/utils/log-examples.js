import React from 'react';

const HeadingsExample = (
  <div>
    <h1>Lorem ipsum</h1>
    <h2>Lorem ipsum</h2>
    <h3>Lorem ipsum</h3>
    <h4>Lorem ipsum</h4>
    <h5>Lorem ipsum</h5>
    <h6>Lorem ipsum</h6>
  </div>
);

const ListsExample = (
  <div>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>

    <ol>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ol>
  </div>
);

const LinkExample = (
  <a
    href='https://github.com/diegomura/react-log'
    style={{ display:'block', color:'blue' }}>
    React-log repo
  </a>
)

const LogoExample = (
  <h1
    style={{
      color: 'black',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'normal',
      fontSize: '50px'
    }}>
    React
    <span
      style={{
        color: 'white',
        fontFamily: 'Arial, Helvetica, sans-serif',
        background: 'linear-gradient(to bottom right, #13493b, #016a26)',
        fontSize: '45px',
        fontWeight: 'bold',
        marginLeft: '10px',
        padding: '5px'
      }}>
      log
    </span>
  </h1>
);

const DateExample = ({ date }) => (
  <h2>
    {date}
  </h2>
);

const StyledDateExample = ({ date }) => (
  <h2 style={{
    padding: '10px',
    background: 'linear-gradient(to bottom right, #F00, #FF0, #0F0, #0FF, #00F)',
  }}>
    {`🦄${date}🦄`}
  </h2>
);

export default [,
  {
    title: 'Headings',
    comp: HeadingsExample
  },
  {
    title: 'Lists',
    comp: ListsExample,
  },
  {
    title: 'Links',
    comp: LinkExample,
  },
  {
    title: 'Custom styling',
    comp: LogoExample,
  },
  {
    title: 'Using the state',
    comp: DateExample,
  },
  {
    title: 'And more!',
    comp: StyledDateExample,
  }
];
