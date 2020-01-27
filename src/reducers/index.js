import { combineReducers } from 'redux'

import indexReducer from './indexReducer/indexReducer';
import registrationReducer from './registrationReducer/registrationReducer';
import loginReducer from './loginReducer/loginReducer';
import projectReducer from './projectReducer/projectReducer';


const rootReducer = combineReducers({
  indexReducer,
  registrationReducer,
  loginReducer,
  projectReducer,

})

export default rootReducer