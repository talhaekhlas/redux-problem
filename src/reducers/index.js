import { combineReducers } from 'redux'

import indexReducer from './indexReducer/indexReducer';
import registrationReducer from './registrationReducer/registrationReducer';
import projectReducer from './projectReducer/projectReducer';


const rootReducer = combineReducers({
  indexReducer,
  registrationReducer,
  projectReducer

})

export default rootReducer