import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
//import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";

import reducers from '../reducers/index_reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(thunk))
);
export default store;