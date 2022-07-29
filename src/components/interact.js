import React from 'react';
import PropTypes from 'prop-types';

class Interact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div className="interact">
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

Interact.propTypes = {
  next: PropTypes.string,
  total: PropTypes.number,
  operation: PropTypes.number,
};

Interact.defaultProps = {
  next: null,
  total: 0,
  operation: null,
};

export default Interact;
