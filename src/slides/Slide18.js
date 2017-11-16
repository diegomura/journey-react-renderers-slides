import React from 'react';
import Slideshow from '../components/Slideshow';
import Tweet1 from '../static/images/tweet1.png';
import Tweet2 from '../static/images/tweet2.png';
import Tweet3 from '../static/images/tweet3.png';
import Tweet4 from '../static/images/tweet4.png';
import Tweet5 from '../static/images/tweet5.png';
import Tweet6 from '../static/images/tweet6.png';

const SLIDES = 6;

class Slide18 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { active: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ active }) => {
        if (active >= SLIDES - 1) {
          return { active: 0 };
        }

        return { active: active + 1 };
      })
    }, 4000)
  }

  render() {
    return (
      <section data-bespoke-backdrop="middle-earth-muted">
        <Slideshow
          width={560}
          height={310}
          active={this.state.active}
          className="align-center"
        >
          <img className="fit" src={Tweet1} />
          <img className="fit" src={Tweet2} />
          <img className="fit" src={Tweet3} />
          <img className="fit" src={Tweet4} />
          <img className="fit" src={Tweet5} />
          <img className="fit" src={Tweet6} />
        </Slideshow>
      </section>
    );
  }
}

export default Slide18;
