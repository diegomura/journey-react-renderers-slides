import React from 'react';
import Log from 'react-log';
import moment from 'moment';
import { isFunction } from 'lodash';
import examples from '../utils/log-examples.js';
import ReactLog from '../static/images/react-log.png';

class Slide04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.getCurrentDate(),
      currentExample: 0,
    };
  }

  componentDidMount() {
    setInterval(this.updateCurrentDate.bind(this), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update when example changes or for the last two state examples
    if (
      nextState.currentExample !== this.state.currentExample ||
      nextState.currentExample >= examples.length - 2
    ) {
      return true;
    }

    return false;
  }

  updateCurrentDate() {
    this.setState({ date: this.getCurrentDate() });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.props.deck.on('next', this.onNextSlide);
      this.props.deck.on('prev', this.onPrevSlide);
    }

    if (this.props.active && !nextProps.active) {
      console.clear();

      if (this.props.deck) {
        this.props.deck.off('next', this.onNextSlide);
        this.props.deck.off('prev', this.onPrevSlide);
      }

      this.setState({ currentExample: 0 })
    }
  }

  onNextSlide = () => {
    if (this.state.currentExample >= examples.length - 1) {
      return true;
    }

    this.setState(state => ({
      currentExample: state.currentExample + 1
    }));

    return false;
  }

  onPrevSlide = () => {
    if (this.state.currentExample === 1) {
      return true;
    }

    this.setState(state => ({
      currentExample: state.currentExample - 1
    }));

    return false;
  }

  getCurrentDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  render () {
    const { active } = this.props;
    const { currentExample } = this.state;

    return (
      <section data-bespoke-backdrop="middle-earth-emphatic">
        <img className="fit" src={ReactLog} />

        { active &&
          <Log>
            {isFunction(examples[currentExample])
              ? examples[currentExample](this.state)
              : examples[currentExample]}
          </Log>
        }
      </section>
    );
  }

}

export default Slide04;
