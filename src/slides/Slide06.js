import React from 'react';
import Log from 'react-log';
import moment from 'moment';
import { isFunction } from 'lodash';
import examples from '../utils/log-examples.js';
import ReactLog from '../static/images/react-log.png';

class Slide06 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.getCurrentDate(),
      currentExample: 0,
    };
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

  updateCurrentDate = () => {
    this.setState({ date: this.getCurrentDate() });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      setInterval(this.updateCurrentDate, 1000);
      this.props.deck.on('next', this.onNextSlide);
      this.props.deck.on('prev', this.onPrevSlide);
    }

    if (this.props.active && !nextProps.active) {
      console.clear();

      if (this.props.deck) {
        clearInterval(this.updateCurrentDate);
        this.props.deck.off('next', this.onNextSlide);
        this.props.deck.off('prev', this.onPrevSlide);
      }

      this.setState({ currentExample: 0 })
    }
  }

  onNextSlide = (e) => {
    if (this.state.currentExample >= examples.length - 1) {
      return true;
    }

    this.setState(state => ({
      currentExample: state.currentExample + 1
    }));

    return false;
  }

  onPrevSlide = () => {
    if (this.state.currentExample <= 1) {
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

  getSubheading() {
    const { currentExample } = this.state;

    if (currentExample === 0) {
      return 'Open your console';
    }

    return examples[currentExample].title;
  }

  render () {
    const { active } = this.props;
    const { currentExample } = this.state;

    return (
      <section data-bespoke-backdrop="middle-earth-emphatic">
        <img className="fit" src={ReactLog} />

        <p
          className="absolute black items-center"
          style={{ bottom: '0px', right: '0px' }}
        >
          <span className="fs-25">{this.getSubheading()}</span>
          <span className="fs-50 ml1">↠</span>
        </p>

        { active &&
          <Log>
            {isFunction(examples[currentExample].comp)
              ? examples[currentExample].comp(this.state)
              : examples[currentExample].comp}
          </Log>
        }
      </section>
    );
  }

}

export default Slide06;
