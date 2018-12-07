import React from 'react';
import ReactDOM from 'react-dom';
import 'bb-color/style/component.css';// eslint-disable-line
import { Block, Button } from 'bb-color/src'; // eslint-disable-line

ReactDOM.render(
  <div className="component-template">
    <Block />
    <Button text="niubi" />
  </div>,
  document.getElementById('example'),
);
