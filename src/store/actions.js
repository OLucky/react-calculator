const ADD_TO_DISPLAY = 'ADD_TO_DISPLAY';
const REMOVE_FROM_DISPLAY = 'REMOVE_FROM_DISPLAY';
const RESET_ALL = 'RESET_ALL';
const SET_OPERATION = 'SET_OPERATION';
const DO_OPERATION = 'DO_OPERATION';

const addToDisplay = symbol => ({type: ADD_TO_DISPLAY, symbol});
const removeFromDisplay = () => ({type: REMOVE_FROM_DISPLAY});
const resetAll = () => ({type: RESET_ALL});
const setOperation = operation => ({type: SET_OPERATION, operation});
const doOperation = () => ({type: DO_OPERATION});

export default {
  constants: {
    ADD_TO_DISPLAY,
    REMOVE_FROM_DISPLAY,
    RESET_ALL,
    SET_OPERATION,
    DO_OPERATION
  },
  functions: {
    addToDisplay,
    removeFromDisplay,
    resetAll,
    setOperation,
    doOperation
  }
};
