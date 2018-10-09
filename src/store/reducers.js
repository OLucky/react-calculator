import { combineReducers } from 'redux';

import actions from './actions';
import handlers from './calculator/handlers';

export const defaultState = {
  display: '0',
  displayLimit: 10,
  firstOperand: null,
  secondOperand: null,
  operation: null,
  result: null
};

export const calculator = (state = defaultState, action) => {
  switch (action.type) {
    case actions.constants.ADD_TO_DISPLAY: {
      const newState = handlers.addSymbol(state, action);
      return newState;
    }

    case actions.constants.REMOVE_FROM_DISPLAY: {
      const newState = handlers.removeSymbol(state, action);
      return newState;
    }

    case actions.constants.SET_OPERATION: {
      const newState = handlers.setOperation(state, action);
      return newState;
    }

    case actions.constants.DO_OPERATION: {
      const newState = handlers.doOperation(state, action);
      return newState;
    }

    case actions.constants.RESET_ALL: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
};

export default combineReducers(calculator);
