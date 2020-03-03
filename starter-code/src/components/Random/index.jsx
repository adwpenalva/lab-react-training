import React from 'react';
import './style.scss';

class Random extends React.Component {
  render() {
    const { min, max } = this.props;
    return (
      <span>
        Random value between {min} and {max} => {Math.floor(Math.random() * max) + min}
      </span>
    );
  }
}

export default Random;
