import {combineReducers} from 'redux';
//import {createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
//import productReducer from './products_reducer';
//import cartReducer from './cart_reducer';
//import ordersReducers from './orders_reducers';


const rootReducer = combineReducers({
    form: formReducer,
    //cart: cartReducer,
    //products: productReducer,
    //orders: ordersReducers    
});

export default rootReducer;