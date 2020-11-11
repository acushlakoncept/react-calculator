import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const objState = this.state;
    const result = calculate(objState, buttonName);
    this.setState({
      total: result.total ? result.total : null,
      next: result.next ? result.next : null,
      operation: result.operation ? result.operation : null,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={total || next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
