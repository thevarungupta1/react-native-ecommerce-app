import { ActionTypes } from '../constants/ActionTypes';

export const addToWishList = data => ({
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: data
})

export const removeFromWishlist = index => ({
    type: ActionTypes.REMOVE_FROM_WISHLIST,
    payload: index
})