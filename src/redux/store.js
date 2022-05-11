//import {createStore} from 'redux'
import { createStore  } from 'redux'
//const store = createStore (RootReducer ,initValue, enhancers);
import RootReducer from './reducer'
const store = createStore (RootReducer);
export default store;