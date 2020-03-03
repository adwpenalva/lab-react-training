import React from 'react';
import './style.scss';

class Greetings extends React.Component {
  render() {
    const { lang, children } = this.props;
    switch (lang) {
      case 'de':
        return <p>Hallo {children}</p>;
      case 'fr':
        return <p>Bonjour {children}</p>;
      case 'en':
        return <p>Hello {children}</p>;
      case 'es':
        return <p>Hola {children}</p>;
      default:
        return <p>{lang} is not a supported language.</p>;
    }
  }
}

export default Greetings;
