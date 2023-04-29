import {ActionTypes} from '../constants/ActionTypes';

export const AddressReducers = (state = [], {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_ADDRESS:
      return [...state, payload];
    case ActionTypes.DELETE_ADDRESS:
      const deleteArray = state.filter((item, index) => {
        return index !== payload;
      });
      return deleteArray;
    default:
      return state;
  }
};
