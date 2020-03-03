import React, { Component } from 'react';
import './style.scss';

class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div>
        <img src={picture} alt="" />
        <section>
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Height:</strong> {height}
          </p>
          <p>
            <strong>Birth:</strong> {birth.toDateString()}
          </p>
        </section>
      </div>
    );
  }
}

export default IdCard;
