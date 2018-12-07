import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => <button>这是一个组件按钮{text}</button>;

Button.propTypes = {
  text: PropTypes.any,
};

export default Button;
