import { ActionTypes } from '../constants/ActionTypes';

export const Reducers2 = (state = [], { type, payload }) => {
    switch(type){
        case ActionTypes.ADD_TO_WISHLIST:
            return [...state, payload];
        
        case ActionTypes.REMOVE_FROM_WISHLIST:
            const deleteArray2 = state.filter((item, index) => {
                return index !== payload
            })
            return deleteArray2;
        
        default:
            return state;
    }

}