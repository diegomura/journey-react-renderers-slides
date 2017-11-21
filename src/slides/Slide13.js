import React from 'react';
import Slideshow from '../components/Slideshow';
import Tree2 from '../static/images/tree2.png';
import ReactDOM from '../static/images/react-dom.png';
import ReactNative from '../static/images/react-native.png';
import ReactVR from '../static/images/react-vr.png';
import ReactHardware from '../static/images/react-hardware.png';
import ReactBlessed from '../static/images/react-blessed.png';
import Browser from '../static/images/browser.png';
import Mobile from '../static/images/mobile.png';
import Oculus from '../static/images/oculus.png';
import Arduino from '../static/images/arduino.png';
import Terminal from '../static/images/terminal.png';

const SLIDES = 5;

class Slide13 extends React.PureComponent {
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
    }, 2500)
  }

  render() {
    return(
      <section
        className="flex"
        data-bespoke-backdrop="middle-earth-muted"
      >
        <h2 className="mb1">React Renderers</h2>
        <div className="flex flex-row" style={{ flex: 1 }}>
          <div className="grow-bullet full-height items-center" style={{ flex: 1 }}>
            <img src={Tree2} className="max-width max-height" />
          </div>
          <div className="grow-bullet full-height items-center">
            <span className="mr1 fs-65">↠</span>
            <Slideshow active={this.state.active} width={200} height={200}>
              <img src={ReactDOM} className="fit" />
              <img src={ReactNative} className="fit" />
              <img src={ReactVR} className="fit" />
              <img src={ReactHardware} className="fit" />
              <img src={ReactBlessed} className="fit" />
            </Slideshow>
            <span className="mx1 fs-65">↠</span>
            <Slideshow active={this.state.active} width={150} height={150}>
              <img src={Browser} className="fit" />
              <img src={Mobile} className="fit" />
              <img src={Oculus} className="fit" />
              <img src={Arduino} className="fit" />
              <img src={Terminal} className="fit" />
            </Slideshow>
          </div>
        </div>
      </section>
    );
  }
};

export default Slide13;
