import React from 'react';
import './styles.scss';

const Rating = props => {
  const number = Math.round(Number(props.children));
  return '★'.repeat(number) + '☆'.repeat(5 - number);
};

export default Rating;
