const addSymbol = (state, action) => {
  const prevDisplay = state.operation && !state.secondOperand ? '0' : state.display;
  const symbol = action.symbol;

  let newDisplay = prevDisplay;
  switch (true) {
    case prevDisplay.length === state.displayLimit || (prevDisplay.includes('.') && symbol === '.'):
      break;

    case prevDisplay === 'NaN' || (prevDisplay === '0' && symbol !== '.'):
      newDisplay = symbol;
      break;

    default:
      newDisplay = prevDisplay + symbol;
      break;
  }

  return {
    ...state,
    display: newDisplay,
    [`${state.operation ? 'secondOperand' : 'firstOperand'}`]: Number(newDisplay)
  };
};

/* 
    TODO: Add logic for removing symbols from first and second operands
*/

const removeSymbol = state => {
  const prevDisplay = state.display;
  const newDisplay =
		prevDisplay.length > 1 ? prevDisplay.substring(0, prevDisplay.length - 1) : '0';

  return { ...state, display: newDisplay };
};

const setOperation = (state, action) => {
  const newOperation = action.operation;
  return { ...state, operation: newOperation };
};

const doOperation = state => {
  const { firstOperand, secondOperand, operation } = state;

  if (operation === '/' && secondOperand === 0) {
    return {
      ...state,
      display: 'NaN',
      firstOperand: NaN,
      secondOperand: null,
      operation: null
    };
  }

  const result = eval(`${firstOperand} ${operation} ${secondOperand}`);

  return {
    ...state,
    display: String(result),
    firstOperand: result,
    secondOperand: null,
    operation: null
  };
};

export default { addSymbol, removeSymbol, setOperation, doOperation };
