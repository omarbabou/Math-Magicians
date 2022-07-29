import React from 'react';
import PropTypes from 'prop-types';

class Interact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cName, result } = this.props;
    return (
      <div className={cName}>{result}</div>
    );
  }
}

Interact.propTypes = {
  cName: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
};

export default Interact;
