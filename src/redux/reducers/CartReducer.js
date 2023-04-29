import {ActionTypes} from '../constants/ActionTypes';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case ActionTypes.REMOVE_FROM_CART:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;
    default:
      return state;
  }
};
