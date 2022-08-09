import './quote.css';
import React from 'react';
import Header from './header';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Header />
        <main className="quote">
          <blockquote>
            <p>
              Math magicians is not about numbers, equations, computations or algorithms;
              It&apos;s about understanding. -William Paul Thurston.
            </p>
          </blockquote>
        </main>
      </>
    );
  }
}

export default Quote;
