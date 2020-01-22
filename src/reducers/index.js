import { combineReducers } from 'redux'

import indexReducer from './indexReducer/indexReducer';
import registrationReducer from './registrationReducer/registrationReducer';


const rootReducer = combineReducers({
  indexReducer,
  registrationReducer
})

export default rootReducer