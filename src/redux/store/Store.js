import { Reducers } from '../reducers/CartReducer'
import { Reducers2 } from '../reducers/WishListReducer';
import { AddressReducers } from '../reducers/AddressReducer';
import { createStore, combineReducers } from 'redux'

const routeReducer = combineReducers({
    Reducers,
    Reducers2,
    AddressReducers
});


export const store = createStore(routeReducer);