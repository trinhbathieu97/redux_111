import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer';
import { composeWithDevTools} from "redux-devtools-extension"


  // const initState = {};
  // const Middleware = [thunk]

const store = createStore(
      rootReducer,
      // initState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store