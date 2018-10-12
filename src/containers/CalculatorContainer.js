import { connect } from 'react-redux';

import Calculator from '../components/Calculator';

import actions from '../store/actions';

const mapStateToProps = state => {
  return {
    display: state.calculator.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddSymbol: symbol => dispatch(actions.functions.addToDisplay(symbol)),
    onRemoveSymbol: () => dispatch(actions.functions.removeFromDisplay()),
    onReset: () => dispatch(actions.functions.resetAll()),
    onSetOperation: operation => dispatch(actions.functions.setOperation(operation)),
    onDoOperation: () => dispatch(actions.functions.doOperation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);