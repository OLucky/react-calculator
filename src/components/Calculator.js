import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Calculator extends Component {
  handleKeyPress = event => {
    event.preventDefault();
    switch (event.keyCode) {
      case 48:
        return this.props.onAddSymbol(0);
      case 49:
        return this.props.onAddSymbol(1);
      case 50:
        return this.props.onAddSymbol(2);
      case 51:
        return this.props.onAddSymbol(3);
      case 52:
        return this.props.onAddSymbol(4);
      case 53:
        return this.props.onAddSymbol(5);
      case 54:
        return this.props.onAddSymbol(6);
      case 55:
        return this.props.onAddSymbol(7);
      case 56:
        return this.props.onAddSymbol(8);
      case 57:
        return this.props.onAddSymbol(9);
      case 110:
        return this.props.onAddSymbol('.');
      case 107:
        return this.props.onSetOperation('+');
      case 109:
        return this.props.onSetOperation('-');
      case 106:
        return this.props.onSetOperation('*');
      case 111:
        return this.props.onSetOperation('/');
      case 13:
        return this.props.onDoOperation();
      case 8:
        return this.props.onRemoveSymbol();

      default:
        break;
    }
  };

  render() {
    const {
      display,
      onAddSymbol,
      onRemoveSymbol,
      onSetOperation,
      onDoOperation,
      onReset
    } = this.props;

    return (
      <main className="calc" tabIndex="0" onKeyDown={this.handleKeyPress}>
        <div className="calc_display">{display}</div>
        <button className="calc_button -col2" onClick={onReset}>
          Reset
        </button>
        <button className="calc_button -col2" onClick={onRemoveSymbol}>
          Remove
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(7)}>
          7
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(8)}>
          8
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(9)}>
          9
        </button>
        <button className="calc_button" onClick={() => onSetOperation('+')}>
          +
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(4)}>
          4
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(5)}>
          5
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(6)}>
          6
        </button>
        <button className="calc_button" onClick={() => onSetOperation('-')}>
          -
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(1)}>
          1
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(2)}>
          2
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(3)}>
          3
        </button>
        <button className="calc_button" onClick={() => onSetOperation('*')}>
          *
        </button>
        <button className="calc_button" onClick={() => onAddSymbol(0)}>
          0
        </button>
        <button className="calc_button" onClick={() => onAddSymbol('.')}>
          .
        </button>
        <button className="calc_button" onClick={onDoOperation}>
          =
        </button>
        <button className="calc_button" onClick={() => onSetOperation('/')}>
          /
        </button>
      </main>
    );
  }
}

Calculator.propTypes = {
  display: string.isRequired,
  onAddSymbol: func.isRequired,
  onRemoveSymbol: func.isRequired,
  onReset: func.isRequired,
  onSetOperation: func.isRequired,
  onDoOperation: func.isRequired
};

export default Calculator;
