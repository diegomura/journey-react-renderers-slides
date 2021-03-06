import React from 'react';
import SocialInfo from '../components/SocialInfo';
import TwitterLogo from '../static/images/twitter.png';
import GithubLogo from '../static/images/github.png';

const Slide01 = () => (
  <section data-bespoke-backdrop="middle-earth">
    <h1>A journey through React renderers</h1>
    <SocialInfo image={TwitterLogo} username="@diegomura" />
    <SocialInfo image={GithubLogo} username="diegomura" />
  </section>
);

export default Slide01;
