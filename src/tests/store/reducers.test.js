import { calculator as calculatorReducer, defaultState } from '../../store/reducers';

import actions from '../../store/actions';

describe('Calculator reducer', () => {
  describe('State actions', () => {
    test('should return state', () => {
      expect(calculatorReducer(defaultState, {})).toEqual(defaultState);
    });

    test('should reset state', () => {
      expect(calculatorReducer(defaultState, { type: actions.constants.RESET_ALL })).toEqual(
        defaultState
      );
    });
  }),
  
  describe('Display actions', () => {
    describe('Add Symbol', () => {
      test('should add one symbol to display and a first operand if operation is not set', () => {
        const mockDisplay = '1';
        expect(
          calculatorReducer(
            { ...defaultState, display: mockDisplay },
            { type: actions.constants.ADD_TO_DISPLAY, symbol: '2' }
          )
        ).toEqual({ ...defaultState, display: '12', firstOperand: 12 });
      });

      test('should add one symbol to display and a second operand if operation is set', () => {
        const mockState = { ...defaultState, operation: '+', display: '1', secondOperand: 1 };
        expect(
          calculatorReducer(mockState, { type: actions.constants.ADD_TO_DISPLAY, symbol: '2' })
        ).toEqual({ ...mockState, display: '12', secondOperand: 12 });
      });

      test('should reset display if operation is set and second operand is null', () => {
        const mockState = { ...defaultState, operation: '+', display: '123' };
        expect(
          calculatorReducer(mockState, { type: actions.constants.ADD_TO_DISPLAY, symbol: '2' })
        ).toEqual({ ...mockState, display: '2', secondOperand: 2 });
      });

      test('should replace zero with an added symbol', () => {
        const mockDisplay = '0';
        expect(
          calculatorReducer(
            { ...defaultState, display: mockDisplay },
            { type: actions.constants.ADD_TO_DISPLAY, symbol: '1' }
          )
        ).toEqual({ ...defaultState, display: '1', firstOperand: 1 });
      });

      test('should replace NaN with a symbol', () => {
        const mockState = {
          ...defaultState,
          display: 'NaN',
          firstOperand: NaN,
          secondOperand: null,
          operation: null
        };
        const symbol = '2';

        expect(
          calculatorReducer(mockState, { type: actions.constants.ADD_TO_DISPLAY, symbol })
        ).toEqual({ ...mockState, display: symbol, firstOperand: Number(symbol) });
      });

      test('should add a dot to a zero', () => {
        const mockDisplay = '0';
        expect(
          calculatorReducer(
            { ...defaultState, display: mockDisplay },
            { type: actions.constants.ADD_TO_DISPLAY, symbol: '.' }
          )
        ).toEqual({ ...defaultState, display: '0.', firstOperand: 0 });
      });

      test('should not add a dot if another dot is present', () => {
        const mockDisplay = '1.';
        expect(
          calculatorReducer(
            { ...defaultState, display: mockDisplay },
            { type: actions.constants.ADD_TO_DISPLAY, symbol: '.' }
          )
        ).toEqual({ ...defaultState, display: '1.', firstOperand: 1 });
      });

      test('should not add a symbol if reached a limit', () => {
        const mockDisplay = '1'.repeat(defaultState.displayLimit);
        expect(
          calculatorReducer(
            { ...defaultState, display: mockDisplay },
            { type: actions.constants.ADD_TO_DISPLAY, symbol: '.' }
          )
        ).toEqual({ ...defaultState, display: mockDisplay, firstOperand: Number(mockDisplay) });
      });
    });

    describe('Remove Symbol', () => {
      test('should remove one symbol from display', () => {
        const mockState = { ...defaultState, display: '12345', firstOperand: 12345 };
        expect(
          calculatorReducer(mockState, { type: actions.constants.REMOVE_FROM_DISPLAY })
        ).toEqual({ ...defaultState, display: '1234', firstOperand: 1234 });
      });

      test('should remove one symbol from display and second operand', () => {
        const mockState = {
          ...defaultState,
          display: '1234',
          firstOperand: 12345,
          operation: '+',
          secondOperand: 1234
        };
        expect(
          calculatorReducer(mockState, { type: actions.constants.REMOVE_FROM_DISPLAY })
        ).toEqual({
          ...defaultState,
          display: '123',
          firstOperand: 12345,
          operation: '+',
          secondOperand: 123
        });
      });

      test('should return zero if needs to remove last symbol from display', () => {
        const mockState = { ...defaultState, display: '1', firstOperand: 1 };
        expect(
          calculatorReducer(mockState, { type: actions.constants.REMOVE_FROM_DISPLAY })
        ).toEqual({ ...defaultState, display: '0', firstOperand: 0 });
      });
    });
  });

  describe('Operations actions', () => {
    test('should set an operation and a first operand', () => {
      const operation = '+';

      expect(
        calculatorReducer({ ...defaultState }, { type: actions.constants.SET_OPERATION, operation })
      ).toEqual({ ...defaultState, operation });
    });

    test('should do an operation', () => {
      const mockState = {
        ...defaultState,
        firstOperand: 1,
        secondOperand: 2,
        display: 2,
        operation: '+'
      };

      expect(calculatorReducer(mockState, { type: actions.constants.DO_OPERATION })).toEqual({
        ...mockState,
        firstOperand: 3,
        secondOperand: null,
        display: '3',
        operation: null
      });
    });

    test('should show NaN if operation is division by zero', () => {
      const mockState = {
        ...defaultState,
        firstOperand: 1,
        secondOperand: 0,
        display: 0,
        operation: '/'
      };

      expect(calculatorReducer(mockState, { type: actions.constants.DO_OPERATION })).toEqual({
        ...mockState,
        firstOperand: NaN,
        secondOperand: null,
        display: 'NaN',
        operation: null
      });
    });
  });
});
