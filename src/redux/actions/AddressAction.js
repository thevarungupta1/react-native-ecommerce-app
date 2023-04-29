import { ActionTypes } from "../constants/ActionTypes"

export const addAddress = (data) => ({
    type: ActionTypes.ADD_ADDRESS,
    payload: data
})

export const deleteAddress = (index) => ({
    type: ActionTypes.DELETE_ADDRESS,
    payload: index
})