import React from 'react';
import './style.scss';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    return (
      <div
        style={{
          backgroundColor: `rgb(${r},${g},${b})`,
          width: '200px',
          height: '50px',
          color: 'white'
        }}
      >
        rgb({r},{g},{b})
      </div>
    );
  }
}

export default BoxColor;
